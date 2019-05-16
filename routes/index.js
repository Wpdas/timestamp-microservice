const express = require('express');
const router = express.Router();

// TimeStamp router
const timestampRouter = require('./timestamp');

router.use('/timestamp', timestampRouter);

router.get('/', (req, res) => {
  // const IP =
  //   req.headers['x-forwarded-for'].split(', ').pop() ||
  //   req.connection.remoteAddress;
  const languages = req.acceptsLanguages();
  const userAgent = req.get('user-agent');

  res.json({
    // ipaddress: IP,
    language: languages.join(','),
    software: userAgent
  });
});

module.exports = router;
