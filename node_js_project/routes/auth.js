const express = require('express');
const {check, body} = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
    '/login',
    [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email address.')
        .normalizeEmail(),
    body('password', 'Please enter a valid password.')
        .isLength({min: 8})
        .isAlphanumeric()
        .trim()
    ],
    authController.postLogin);

router.post(
    '/signup',
    [ 
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, {req}) => {
            // if (value === 'test@test.com') {
            //     throw new Error('This email address is forbidden.');
            // }
            // return true;
        return User.findOne({email: value}).then(userDoc => {
            if (userDoc) {
                return Promise.reject('This email already exists. Please sign up with a different one, or login.');
            }
        }); 
    })
    .normalizeEmail(),
        body(
            'password', 
            'Please enter a password with only numbers and text and at least 8 characters.'
        )
            .isLength({min: 8})
            .isAlphanumeric()
            .trim(),
        body('confirmPassword')
            .trim()
            .custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('Passwords must match!');
            }
            return true;
        })
    ],
    authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('new-password', authController.postNewPassword);

module.exports = router; 