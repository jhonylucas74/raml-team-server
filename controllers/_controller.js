module.exports = function(model){

  this.index = function (req, res, next) {
    model.index(function(result){
      res.json(result);
    });
  }

  this.show = function (req, res, next) {
    model.show(req.params.id, function(result){
      res.json(result);
    });
  }

  this.create = function (req, res, next) {
    model.create(req.body, function(result){
      res.json(result);
    });
  }

  this.update = function (req, res, next) {
    model.update(req.params.id, req.body, function(result){
      res.json(result);
    });
  }

  this.delete = function (req, res, next) {
    model.delete(req.params.id, function(result){
      res.json(result);
    });
  }

}
