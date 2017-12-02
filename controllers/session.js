const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User   = require('../models/users.js');

router.get('/login', (req, res) => {
  res.render('users/new.ejs', {
    message: req.session.message
  });

});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.username = req.body.username;
      req.session.logged = true;
      console.log(req.session);
      res.redirect('/');
    } else {
      console.log('Bad Password');
      req.session.message = "Username or password are incorrect";
      res.redirect('/user/login');
    }
  } catch(err) {
    console.log('Login Error: ', err);
    req.session.message = "Username or password are incorrect";
    res.redirect('/user/login');
  }
});

router.post('/register', async (req, res, next) => {
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));


  const username = req.body.username;
  const userDbEntry = {};
  userDbEntry.username = username;
  userDbEntry.password = passwordHash;
  console.log(userDbEntry);


   try {
     const user = await User.create(userDbEntry);
     console.log(user);
     req.session.username = user.username;
     req.session.logged = true;
     res.redirect('/');
   } catch(err) {
     console.log('Register Error: ', err);
   }
});

router.get('/', (req, res) => {
  // we need to render the login view.
});

router.post('/', (req, res) => {
  // After posting the form to this route, we should analyze the session variables
});

router.get('/logout', (req, res) => {
  // here we destroy the session
  req.session.destroy();
  res.redirect('/');
});

// Update
router.get('/update', (req, res) => {
  req.session.anyProperty = "something";
  req.session.username = "Cheese";
  console.log(req.session);
});

// export the controller
module.exports = router;
