const express = require('express');
const app = express();

const morgan = require('morgan'); //Morgan is for logging specially for timer


const heroRoutes = require('./api/routes/heroes');

app.use(morgan('dev'));

app.use('/heroes', heroRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  })  
})

module.exports = app;