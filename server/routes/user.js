var express = require('express');
var router = express.Router();
const db = require('../db');
const genPassword = require('../util/password').genPassword;
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('log-in-form');
});

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '',
    successRedirect: '/api/v1/ingredients',
  })
);

router.get('/register', (req, res) => {
  res.render('sign-up-form');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const saltHash = genPassword(password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  try {
    const results = await db.query(
      'INSERT INTO users (username, salt, hash) VALUES ($1, $2, $3)',
      [username, salt, hash]
    );
  } catch (err) {
    console.log(err);
  }

  res.redirect('/login');
});

module.exports = router;
