const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('../../nuxt.config');

const nuxt = new Nuxt(nuxtConfig);

if (nuxtConfig.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

module.exports = nuxt;
