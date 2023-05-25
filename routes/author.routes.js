const { Router } = require("express");
const { authorControllers } = require("../controllers/author.controller");

const router = Router();

router.post("/author", authorControllers.addAuthor); //* добавление автора

module.exports = router;