const { resolve } = require('path');

module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  srcDir: resolve(__dirname, '../client'),
  router: { middleware: ['auth'] }
};
