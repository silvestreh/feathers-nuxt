const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('../../config/nuxt.config');

module.exports = function (app) {
  const nuxt = new Nuxt(nuxtConfig);

  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt);
    builder.build();
  }

  app.use(nuxt.render);
};
