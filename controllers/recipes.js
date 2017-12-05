const express = require('express');
const router  = express.Router();

// models
const User = require('../models/users.js');
const Recipe = require('../models/recipes.js');

// index route
router.get('/', async (req, res) => {
  const username = req.body.username;
  const allRecipes = await Recipe.find();
  res.render('recipes/index.ejs', {username, allRecipes});
  // if (req.session.logged) {
  //   res.render('recipes/index.ejs', {
  //     recipe: allrecipes,
  //     username: req.session.username
  //   });
  // } else {
  //   res.redirect('/session/login');
  // };
});

router.get('/new', async (req, res) => {
  const oneUser = req.session.id;
  const allRecipes = await Recipe.find().populate('user');
  console.log("User data ", req.session.id);
  res.render('recipes/new.ejs', {oneUser: oneUser});
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
  const oneRecipe = await Recipe.findById(req.params.id);
  // const user = await Comment.find({ photo: onePhoto._id });

  res.render('recipes/show.ejs', {oneRecipe});
});


// Update
router.get('/:id/edit', async (req, res) => {
  const editRecipe = await Recipe.findById(req.params.id);
  res.render('recipes/edit.ejs', {Recipe: editRecipe});
});

router.put('/:id', async (req, res) => {
    const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/recipes/' + updateRecipe.id);
});

// Delete
router.delete('/:id', async (req, res) => {
  const deleteRecipe = await Recipe.findByIdAndRemove(req.params.id);
  // await Comments.remove({ photo: deletePhoto._id });
  res.redirect('/');
});




module.exports = router;
