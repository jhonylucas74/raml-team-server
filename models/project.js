  var Model = require('./_model.js');

  var schema = {
    id: true,
    name: true,
    file: true,
    group_id: true
  };

  var model = new Model('projects', schema, true);

  // Export model
  module.exports = model;
