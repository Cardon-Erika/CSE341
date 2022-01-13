const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.use('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;