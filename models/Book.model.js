const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  bookTitle: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
