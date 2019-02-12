const { render } = require('./nuxt');
const isTestEnv = process.env.NODE_ENV === 'test';

module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.use((req, res, next) => {
    const accepts = req.accepts('html', 'json');
    if (accepts === 'json') return next();
    if (!isTestEnv) render(req, res, next);
  });
};
