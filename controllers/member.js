  var Controller = require('./_controller.js');;
  var model = require('../models/member.js');

  // Export controller
  var controller = new Controller(model);
  module.exports = controller;
