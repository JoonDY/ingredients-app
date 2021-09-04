module.exports.isAuth = (req, res, next) => {
  console.log(req);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      message: 'Unauthorized access.',
    });
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) {
    next();
  } else {
    res.status(401).json({
      message: 'Unauthorized access.',
    });
  }
};
