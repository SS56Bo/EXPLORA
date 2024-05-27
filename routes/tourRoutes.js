const express = require('express');
const tourController = require('./../controller/tourController');
const tourRouter = express.Router();

////////// ROUTES ////////////

tourRouter.route('/');

module.exports = tourRouter;
