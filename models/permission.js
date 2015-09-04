  var Model = require('./_model.js');

  var schema = {
    id: true,
    role: true,
    user_id: true,
    project_id: true
  };

  var model = new Model('permissions', schema, true);

  // Export model
  module.exports = model;
