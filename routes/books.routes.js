const { Router } = require("express");
const { booksControllers } = require("../controllers/books.controller");

const router = Router();

router.post("/books", booksControllers.addBook); // *добавление книги
router.delete("/books/:id", booksControllers.deleteBook); // *удаление книги
router.patch("/books/:id", booksControllers.changeBook); // *изменение книги
router.get("/books/:id", booksControllers.getBooksbyId); // *вывод определенной книги
router.get("/books", booksControllers.getBooks); // *вывод всех книг
router.get("/books-genre/:id", booksControllers.getAllBooksByGenre); //* вывод всех книг из определенного жанра

module.exports = router;
