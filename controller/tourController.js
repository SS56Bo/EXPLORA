const express = require('express');
const Tour = require('./../models/tourModel');
const app = require('./../appSetup');

////// MIDDLEWARE ////////
app.get((req, res, next) => {
  console.log('Tour Controller Middleware Passed');
  next();
});

////// CONTROLLER /////////
module.exports = getAllTours = (req, res) => {};
module.exports = getTours = (req, res) => {};
