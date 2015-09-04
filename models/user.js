  var Model = require('./_model.js');

  var schema = {
    id: true,
    name: true,
    email: true,
    avatar: true,
    password: false
  };

  var model = new Model('users', schema, true);

  // Export model
  module.exports = model;
