const ingredients = require('./ingredients');
const user = require('./user');

module.exports = (app) => {
  app.use('/api/v1/ingredients', ingredients);
  app.use('/auth', user);
};
