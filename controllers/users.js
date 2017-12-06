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
  const oneUser = await User.find({username: req.session.username});
  const recipes = await Recipe.find({ user: oneUser[0]._id });
  console.log('oneUser', oneUser[0]._id);

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

// Delete
router.delete('/:id', async (req, res) => {
  const deleteUser = await User.findByIdAndRemove(req.params.id);
  // await Comments.remove({ photo: deletePhoto._id });
  res.redirect('/');
});


module.exports = router;
