  var Controller = require('./_controller.js');;
  var model = require('../models/group.js');

  // Export controller
  var controller = new Controller(model);
  module.exports = controller;
