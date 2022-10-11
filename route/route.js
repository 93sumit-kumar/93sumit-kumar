const express = require('express');
const authController = require('../controller/authController');
const route = express();
// ejs template
route.set('view engine', 'ejs');

// render login form
route.get('/login', (req, res) => {
   console.log('login form');
   res.render('login');
});
// login submit
route.post('/login', authController.login);
// render sign-up form
route.get('/signup', (req, res) => {
   res.render('signup');
});
route.post('/signup', authController.signup)
module.exports = route;
