  var Controller = require('./_controller.js');;
  var model = require('../models/permission.js');

  // Export controller
  var controller = new Controller(model);
  module.exports = controller;
