const express = require('express');
const router  = express.Router();

// models
const User = require('../models/users.js');
const Recipe = require('../models/recipes.js');

// index route
router.get('/', async (req, res) => {
  const username = req.body.username;
  const allrecipes = await Recipe.find();
  res.render('recipes/index.ejs', {username, allrecipes});
  // if (req.session.logged) {
  //   res.render('recipes/index.ejs', {
  //     recipe: allrecipes,
  //     username: req.session.username
  //   });
  // } else {
  //   res.redirect('/session/login');
  // };
});

// show route
router.get('/:id', async (req, res) => {
  const oneRecipe = await Recipe.findById(req.params.id);
  // const user = await Comment.find({ photo: onePhoto._id });

  res.render('recipes/show.ejs', {
    oneRecipe: oneRecipe,
    // comments: comments
 });
});

// create route
router.get('/new', async (req, res) => {
  res.render('recipes/new.ejs');
});

router.post('/new', async (req, res) => {
  try {
    const createdRecipe = await Recipe.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
