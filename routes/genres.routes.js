const { Router } = require("express");
const { genreControllers } = require("../controllers/genres.controller");

const router = Router();

router.post("/genre", genreControllers.addGenre); //* добавление жанра
router.delete("/genre/:id", genreControllers.deleteGenre); //* удаление жанра
router.get("/genres", genreControllers.getAllGenre); // *вывод всех жанров

module.exports = router;