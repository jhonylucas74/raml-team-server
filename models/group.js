  var Model = require('./_model.js');

  var schema = {
    id: true,
    name: true,
    avatar: true
  };

  var model = new Model('groups', schema, true);

  // Export model
  module.exports = model;
