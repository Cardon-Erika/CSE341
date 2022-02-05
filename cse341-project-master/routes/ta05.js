//TA05 PLACEHOLDER
const express = require('express');
const router = express.Router();

// Require in Controllers
const ta05Controller = require('../controllers/ta05');

router.post('/create-cookie', ta05Controller.postCreateCookie);

router.post('/counter', ta05Controller.postChangeCount);

router.post('/changeStyle', ta05Controller.postChangeStyle);

router.post('/reset', ta05Controller.resetSession);

router.get('/', ta05Controller.getIndex);

module.exports = router;
