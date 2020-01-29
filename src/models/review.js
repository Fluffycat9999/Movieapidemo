const mongoose = require('mongoose');
const Movie = require('../movie');

const reviewSchema = new mongoose.Schema({
    review: { type: Number, min: 1, max: 5 }
  });
  const Review = db.model('Review', reviewSchema);
  
  const doc = new Review({ review: 'not a number' });
  const err = doc.validateSync();
  
  err.errors['review'].name; // 'CastError'
  // 'Cast to Number failed for value "not a number" at path "numWheels"'
  err.errors['review'].message;
  const Reviews = mongoose.model("Reviews", reviewSchema);
  module.exports = Reviews;