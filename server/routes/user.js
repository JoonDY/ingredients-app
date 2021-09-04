var express = require('express');
var router = express.Router();
const db = require('../db');
const genPassword = require('../util/password').genPassword;
const passport = require('passport');
const isAuth = require('../util/authMiddleware').isAuth;
const isAdmin = require('../util/authMiddleware').isAdmin;

router.get('/login', (req, res) => {
  res.render('log-in-form');
});

// router.post('/login', (req, res) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (!user) {
//       res.send('fail');
//     }
//     if (user) {
//       console.log(user);
//       res.send('success');
//     }
//   })(req, res);
// });

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('success <button><a href="/api/v1/auth/logout">Logout</a></button>');
});

router.get('/private-route', isAuth, (req, res, next) => {
  res.send('Private route entered.');
});

router.get('/admin-route', isAdmin, (req, res, next) => {
  res.send('Admin route entered.');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('Logout success');
});

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

  res.redirect('/api/v1/auth/login');
});

module.exports = router;
