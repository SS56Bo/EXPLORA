const mongoose = require('mongoose');

const tourModel = new mongoose.schema({
  tourName: {
    type: String,
    required: [true, 'A Tour must have a name'],
    unique: true,
    trim: true,
  },
  startingDate: {
    type: Date,
    require: [true, 'A tour must always have a starting data'],
    unique: true,
    trim: true,
  },
  numberOfDays: {
    type: String,
    require: [true, 'A tour must always have defined number of dates'],
  },
  priceOfTour: {
    type: Number,
    require: [true],
    trim: true,
  },
  rating: {
    type: Number,
    trim: true,
  },
  discountPrice: {
    type: Number,
    trim: true,
  },
  descriptionTour: {
    type: String,
    unique: true,
    trim: true,
  },
});

const tourInfo = mongoose.model('tourInfo', tourModel);

module.export = tourInfo;
