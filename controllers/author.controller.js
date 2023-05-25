const Author = require("../models/Author.model");

module.exports.authorControllers = {
  addAuthor: async (req, res) => {
    const author = await Author.create({
        name: req.body.name,
        biography: req.body.biography,
    })
    res.json(author)
  }
};