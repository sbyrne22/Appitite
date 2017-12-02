const express = require('express');
const router  = express.Router();

// models
const User = require('../models/users.js');
const Recipe = require('../models/recipes.js');

// index route
router.get('/', (req, res) => res.redirect('/user/login'));

// View all Users (users/index.ejs)
router.get('/viewallusers', async (req, res) => {
  const allUsers = await Photo.find();
});

// show route
router.get('/:id', async (req, res) => {
  const oneUser = await User.findById(req.params.id);
  const recipes = await Recipe.find({ user: oneUser._id });

  res.render('users/show.ejs', {
    oneUser: oneUser,
    recipes: recipes
 });
});

// create route
router.post('/viewallusers', async (req, res) => {
  try {
    const createdPhoto = await Photo.create(req.body);
    res.redirect('/user/:id');
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
