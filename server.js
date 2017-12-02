const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app      = express();
const methodOverride = require('method-override');
const PORT     = 3000;
require('pretty-error').start();


// connect to database
const mongoURI = 'mongodb://localhost:27017/photo_comments';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// test db connection
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// controllers
// const usersController = require('./controllers/users.js');
const recipesController = require('./controllers/recipes.js');
const sessionsController = require('./controllers/session.js');

// middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
  secret: 'randomString',
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride('_method'));
// app.use('/users', usersController);
// app.use('/recipes', recipesController);
app.use('/user', sessionsController);

// root route
app.get('/', (req, res) => res.redirect('/users/login'));

// :ear
app.listen(PORT, () => {
  console.log('===========================');
  console.log('Photo app on port: ', PORT);
  console.log('===========================');
});
