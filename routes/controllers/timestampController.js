const processTimeStamp = (req, res) => {
  const { date_string } = req.params;
  const date = new Date(date_string || Date());

  if (!date.getTime()) {
    return res.status(400).json({
      error: 'Invalid Date'
    });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
};

module.exports = {
  processTimeStamp
};
