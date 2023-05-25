const Review = require("../models/Review.model");

module.exports.reviewControllers = {
  addReview: async (req, res) => {
    const newReview = await Review.create({
        reviewe: req.body.reviewe,
        reviewer: req.body.reviewer,
        bookId: req.body.bookId,
    });
    res.json(newReview);
  },
  deleteReview: async (req, res) => {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    res.json(deletedReview);
  },
  getAllReviewByBook: async (req, res) => {
    const allReview = await Review.find({bookId: req.params.idbook});
    res.json(allReview);
  }
};
