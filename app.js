const express = require('express');
const logger = require('morgan');

const app = express();
const routes = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send(
    '<h3>Timestamp Microservice</h3></br><a href="/api/timestamp">Test Timestamp Microservice</a>'
  );
});

module.exports = app;
