var controller = {};

controller.index = function (req, res, next) {
  res.json({msg: 'tudo de boa'});
}

controller.hello = function (req, res, next) {
  res.json({msg: 'tudo ok'});
}

// Export controller
module.exports = controller;
