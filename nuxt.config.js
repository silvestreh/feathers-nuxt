const { resolve } = require('path');
const package = require('./package.json');
const config = require('./config/default.json');

const isDev = !['production', 'test'].includes(process.env.NODE_ENV);

module.exports = {
  dev: isDev,
  telemetry: false,
  srcDir: resolve(__dirname, './client'),
  router: { middleware: ['auth'] },
  build: {
    transpile: ['feathers-vuex']
  },
  env: { API_URL: process.env.API_URL || `http://localhost:${config.port}` },
  head: {
    title: `${package.name} — ${package.description}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: ['normalize.css/normalize.css', './client/styles.css'],
  render: {
    csp: {
      reportOnly: false,
      // Note: the following is the default directives from helmet:
      // `helmet.contentSecurityPolicy.getDefaultDirectives()`
      policies: {
        'default-src': ["'self'"],
        'base-uri': ["'self'"],
        'block-all-mixed-content': [],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:'],
        'object-src': ["'none'"],
        'script-src': ["'self'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
        'upgrade-insecure-requests': []
      }
    }
  }
};
