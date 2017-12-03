const express = require('express');
const router  = express.Router();

// models
const User = require('../models/users.js');
const Recipe = require('../models/recipes.js');

// index route
// router.get('/', (req, res) => res.redirect('/session'));

// View all Users (users/index.ejs)
router.get('/viewallusers', async (req, res) => {
  const allUsers = await User.find();
  res.render('users/index.ejs', {allUsers});
});

// show route
router.get('/:id', async (req, res) => {
  const oneUser = await User.findById(req.params.id);
  const recipes = await Recipe.find({ user: oneUser._id });

  if (req.session.logged) {
    res.render('users/show.ejs', {
      oneUser: oneUser,
      recipes: recipes,
      username: req.session.username
    });
  } else {
    res.redirect('/session/login');
  };
});


module.exports = router;
