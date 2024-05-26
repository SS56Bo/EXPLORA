const express = require('express');
const morgan = require('morgan');
const tourRoute = require('./routes/tourRoutes');
const app = express;

//////// MIDDLEWARE SETUP //////////
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Tour Controller Middleware !');
  next();
});

///////////////////////////////////

//////// ROUTES SETUP ////////////
app.use('api/tours', tourRoute);

////////////////////////////////

module.exports = app;
