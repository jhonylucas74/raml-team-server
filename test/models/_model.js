  var assert = require("assert");
  describe('Models', function() {

    describe('Model Standard', function () {
      var userModel = require('../../models/user.js');
      var uuid = require('node-uuid');
      var uiname = uuid.v4();

      it('#CREATE : should return 201 status', function (done) {

        var user = {
          name: uiname,
          email: uiname+'@email.com',
          avatar: 'none',
          password: 123456
        };

        userModel.create(user, function(data) {
           assert.equal(201, data.status);
           done();
        });

      });

      it('#INDEX : should return 200 status', function (done) {
        userModel.index(function(data) {
           assert.equal(200, data.status);
           done();
        });

      });

      it('#SHOW : should return 200 status', function (done) {
        var user = {
          id: 2
        };

        userModel.show(user, function(data) {
           assert.equal(200, data.status);
           done();
        });

      });

      it('#UPDATE : should return 200 status', function (done) {
        var user = {
          id: 2,
          name: uiname,
          avatar: 'ds',
          password: 123456
        };

        userModel.update(user, function(data) {
           assert.equal(200, data.status);
           done();
        });

      });

      it('#DELETE : should return 200 status', function (done) {
        var user = {
          id: 2
        };

        userModel.delete(user, function(data) {
           assert.equal(200, data.status);
           done();
        });

      });

    });

  });
