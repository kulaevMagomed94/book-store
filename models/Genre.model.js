const mongoose = require("mongoose");

const genrSchema = mongoose.Schema({
  genreName: { type: String, required: true },
  genreDescription: String,
});

const Genre = mongoose.model("Genre", genrSchema);

module.exports = Genre;