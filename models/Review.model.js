const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  reviewe: { type: String, required: true },
  reviewer: { type: String, required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
