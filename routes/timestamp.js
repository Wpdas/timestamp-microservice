const express = require('express');
const router = express.Router();
const timestampController = require('./controllers/timestampController');

router.get('/:date_string?', timestampController.processTimeStamp);

module.exports = router;
