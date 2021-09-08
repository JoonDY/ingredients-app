const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const genPassword = (password) => {
  let salt = crypto.randomBytes(32).toString('hex');
  let genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');

  return {
    salt: salt,
    hash: genHash,
  };
};

const validatePassword = (password, hash, salt) => {
  let hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');

  return hash === hashVerify;
};

const issueJWT = (user) => {
  const id = user.id;
  const expiresIn = '1d';

  const payload = {
    sub: id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn,
    algorithm: 'HS256',
  });

  return {
    token: `Bearer ${signedToken}`,
    expires: expiresIn,
  };
};

module.exports.genPassword = genPassword;
module.exports.validatePassword = validatePassword;
module.exports.issueJWT = issueJWT;
