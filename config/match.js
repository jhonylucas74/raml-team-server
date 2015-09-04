module.exports = function(app){
  return function match(method, route, controller, action) {
    app[method](route, function (req, res, next) {
      require('../controllers/' + controller)[action || 'index'](req, res, next)
    })
  }
}
