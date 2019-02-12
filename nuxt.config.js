const { resolve } = require('path');
const package = require('./package.json');

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  srcDir: resolve(__dirname, './client'),
  router: { middleware: ['auth'] },
  head: {
    title: `${package.name} — ${package.description}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  },
  css: [
    'normalize.css/normalize.css',
    './client/styles.css'
  ]
};
