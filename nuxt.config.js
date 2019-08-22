const { resolve } = require('path');
const package = require('./package.json');
const config = require('./config/default.json');

const isDev = !['production', 'test'].includes(process.env.NODE_ENV);

module.exports = {
  dev: isDev,
  srcDir: resolve(__dirname, './client'),
  router: { middleware: ['auth'] },
  env: { apiURL: process.env.API_URL || `http://localhost:${config.port}` },
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
