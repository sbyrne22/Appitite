const express = require('express');
const router  = express.Router();

// models
const User = require('../models/users.js');
const Recipe = require('../models/recipes.js');



// index route
router.get('/', async (req, res) => {
  const oneUser = await User.find({username: req.session.username});
  const username = req.session.username;
  const recipes = await Recipe.find();
  res.render('recipes/index.ejs', {username, oneUser, recipes});
  // if (req.session.logged) {
  //   res.render('recipes/index.ejs', {
  //     recipe: allrecipes,
  //     username: req.session.username
  //   });
  // } else {
  //   res.redirect('/session/login');
  // };
});

// create route
router.post('/new', async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    console.log('Recipe.user', Recipe.user);
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});

// show route
router.get('/:id', async (req, res) => {
  const oneUser = await User.find({username: req.session.username});
  const username = req.session.username;
  const oneRecipe = await Recipe.findById(req.params.id);
  const recipeInst = oneRecipe.instructions.split('\n');

  // const recipeInst = oneRecipe.instructions.split('Step');
  // oneRecipe.instructions.split('Step').shift();
  // recipeInst.shift();
  console.log('RecipeInst', recipeInst);
  // const user = await Comment.find({ photo: onePhoto._id });

  res.render('recipes/show.ejs', {oneRecipe, recipeInst, username, oneUser});
});


// Update
router.get('/:id/edit', async (req, res) => {
  const oneUser = await User.find({username: req.session.username});
  const username = req.session.username;
  const editRecipe = await Recipe.findById(req.params.id);
  res.render('recipes/edit.ejs', {Recipe: editRecipe, username, oneUser});
});

router.put('/:id', async (req, res) => {
    const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('back');
});

// Delete
router.delete('/:id', async (req, res) => {
  const deleteRecipe = await Recipe.findByIdAndRemove(req.params.id);
  // await Comments.remove({ photo: deletePhoto._id });
  res.redirect('back');
});




module.exports = router;
