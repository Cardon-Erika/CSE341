const { body } = require('express-validator');

const express = require('express');

const infoController = require('../controllers/info');

const router = express.Router();

const Info = require('../models/info');

//const validator = require('express-validator');

router.get('/add-info', infoController.getAddInfo);

router.get('/', infoController.getIndex);


router.post(
    '/add-info',
    [
      body('name')
        .isString()
        .isLength({min: 3, max: 50})
        .trim(),
      body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, { req }) => {
            if (value === 'test@test.com') {
              throw new Error('This email address is FORBIDDEN!!!!')
            }
            return true
        })
        .normalizeEmail(),
        body('zip')
          .isNumeric()
          .isLength({min:5, max:5})
    ],
    infoController.postAddInfo
  );

  

module.exports = router;