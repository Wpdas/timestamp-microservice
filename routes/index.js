const express = require('express');
const router = express.Router();

// TimeStamp router
const timestampRouter = require('./timestamp');

router.use('/timestamp', timestampRouter);

module.exports = router;
