const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  instructions: { type: String, require: true },
  ingrediants: { type: String, require: true },
  imgUrl: String,
  categories: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Recipe', recipeSchema);
