const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User   = require('../models/users.js');

router.get('/login', async (req, res) => {
  const oneUser = await User.find({username: req.session.username});
  console.log('oneUser', oneUser);
  res.render('users/new.ejs', {
    message: req.session.message,
    username: req.session.username,
    oneUser
  });

});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (bcrypt.compareSync(req.body.password, user.password)) {
      // req.session.message = '';
      req.session.username = req.body.username;
      req.session.logged = true;
      console.log(req.session);
      res.redirect('/profile/' + user.id);
    } else {
      console.log('Bad Password');
      req.session.message = "Username or password are incorrect";
      res.redirect('/session/login');
    }
  } catch(err) {
    console.log('Login Error: ', err);
    req.session.message = "Username or password are incorrect";
    res.redirect('/session/login');
  }
});

// Register
router.post('/register', async (req, res, next) => {

  // Create Hash Password
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const username = req.body.username;

  // Create an object for our db entry
  const userDbEntry = {};
  userDbEntry.username = username;
  userDbEntry.password = passwordHash;
  console.log(userDbEntry);


   try {
     const users = await User.find({username: req.body.username});
     if (users.length == 0) {
    const user = await User.create(userDbEntry);
    console.log(user);
    req.session.username = user.username;
    req.session.logged = true;
    res.redirect('/profile/' + user.id);

  } else {
    // req.session.message = "'Username taken'";
    res.send('Username taken');
  }
     console.log(user);
   } catch(err) {
     res.send('Failed to create user')
     console.log('Register Error: ', err);
   }
});

// Logout
router.get('/logout', (req, res) => {
  // here we destroy the session
  req.session.destroy();
  res.redirect('/');
});

// Update
router.get('/update', (req, res) => {
  req.session.anyProperty = "something";
  // req.session.username = "Cheese";
  console.log(req.session);
});

// export the controller
module.exports = router;
