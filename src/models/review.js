const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(/* 'Review',  */{
  movie:{
      type: String,
      required: true
  },
  reviewScore:{
      type: Number,
      required: true,
      min: 1,
      max: 5
  },
  reviewText:{
      type: String,
      required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'User'
  }
},
{
  timestamps: true
}
);

  const Review = mongoose.model("Review", reviewSchema);
  module.exports = Review;