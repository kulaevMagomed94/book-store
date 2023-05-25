const { Router } = require("express");
const { reviewControllers } = require("../controllers/review.controller");

const router = Router();

router.post("/review", reviewControllers.addReview); // *добавление рецензии к определенной книге
router.delete("/review/:id", reviewControllers.deleteReview); // *удаление рецензии
router.get("/review-book/:idbook", reviewControllers.getAllReviewByBook); //* вывод всех рецензий к определенной книге

module.exports = router;