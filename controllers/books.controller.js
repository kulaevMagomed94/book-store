const Book = require("../models/Book.model");

module.exports.booksControllers = {
  addBook: async (req, res) => {
    const newBook = await Book.create({
      bookTitle: req.body.bookTitle,
      authorId: req.body.authorId,
      genreId: req.body.genreId
    });
    res.json(newBook);
  },
  getBooksbyId: async (req, res) => {
    const booksById = await Book.findById(req.params.id);
    res.json(booksById);
  },
  getBooks: async (req, res) => {
    const books = await Book.find().populate('authorId');
    res.json(books);
  },
  getAllBooksByGenre: async (req, res) => {
    const booksByGenre = await Book.find({ genreId: req.params.id });
    res.json(booksByGenre);
  },
  deleteBook: async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  },
  changeBook: async (req, res) => {
    const changedBook = await Book.findByIdAndUpdate(req.params.id, {
      bookTitle: req.body.bookTitle,
      authorId: req.body.authorId,
      genreId: req.body.genreId,
    });
    res.send(changedBook);
  },
};
