const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, require: true },
  instructions: { type: String, require: true },
  imgUrl: String,
  categories: [String]
});

module.exports = mongoose.model('Recipe', recipeSchema);
