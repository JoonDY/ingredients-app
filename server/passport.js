const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');
const validatePassword = require('./util/password').validatePassword;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const res = await db.query(
        'SELECT id, username, hash, salt FROM users WHERE username=$1',
        [username]
      );

      const user = res.rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const valid = validatePassword(password, user.hash, user.salt);
      console.log(valid);

      if (!valid) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    } catch (err) {
      console.log(err);
      return done(err);
    }
  })
);
