const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');
const validatePassword = require('./util/password').validatePassword;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const result = await db.query('SELECT * FROM users WHERE username=$1', [
        username,
      ]);

      const user = result.rows[0];

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const valid = validatePassword(password, user.hash, user.salt);

      if (valid) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    } catch (err) {
      console.log(err);
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE id=$1', [userId]);
    if (result) {
      const user = result.rows[0];
      return done(null, user);
    }
  } catch (err) {
    console.log(err);
    return done(err);
  }
});
