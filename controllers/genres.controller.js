const Genre = require("../models/Genre.model");

module.exports.genreControllers = {
  addGenre: async (req, res) => {
    const newGenre = await Genre.create({
        genreName: req.body.genreName,
        genreDescription: req.body.genreDescription,
    });
    res.json(newGenre);
  },
  deleteGenre: async (req, res) => {
    const deletedGenre = await Genre.findByIdAndDelete(req.params.id);
    res.json(deletedGenre);
  },
  getAllGenre: async (req, res) => {
    const allGenre = await Genre.find();
    res.json(allGenre);
  }
};
