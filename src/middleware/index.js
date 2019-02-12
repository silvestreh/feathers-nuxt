const nuxt = require('./nuxt');

const isTestEnv = process.env.NODE_ENV === 'test';

module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  if (!isTestEnv) nuxt(app);
};
