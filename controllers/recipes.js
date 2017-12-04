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
  res.render('recipes/new.ejs');
});

router.post('/new', async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.send(err.message);
  }
});

// show route
router.get('/:id', async (req, res) => {
  const oneRecipe = await Recipe.findById(req.params.id);
  // const user = await Comment.find({ photo: onePhoto._id });

  res.render('recipes/show.ejs', {
    oneRecipe: oneRecipe
 });
});

// create route


module.exports = router;
