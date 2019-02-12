const users = require('./users/users.service.js');

module.exports = function (app) {
  app.configure(users);
};
