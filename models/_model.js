module.exports = function(table, schema, restrict){
  var pg = require('pg');
  var connectionString = process.env.OPENSHIFT_POSTGRESQL_DB_URL || 'postgres://localhost:5432/ramlteam';

  var selectFields = '*';
  // Define which attributes are returned
  if (restrict) {
    selectFields = (function (schema) {
      var fields = Object.keys(schema).map(function(key){
        if(schema[key] == true){
          return key;
        } else {
          return null;
        }
      });

      return fields.filter(function(val) { return val !== null; }).join(', ');
    })(schema);
  }

  this.index = function(callback){
    // Build sql
    var sql = "SELECT "+ selectFields + " FROM " + table + ";";

    // Get all instances in db
    pg.connect(connectionString, function(err, client, done) {

      var query = client.query(sql, function(err, result) {
        if(err) {
            console.error('error running query', err);
            callback({ status: 500, msg: 'Something broke!'});;
          }
      });

      var results = [];

      query.on('row', function(row) {
        results.push(row);
      });

      query.on('end', function() {
        client.end();
        callback({ status: 200, results: results });
      });

      if(err) {
        console.log(err);
        callback({ status: 500, msg: 'Something broke!'});
      }

    });
  };

  this.show = function(id, callback){

    // Build sql
    var sql = "SELECT "+ selectFields + " FROM " + table
    + " WHERE id = " + id + ';';

    // Get instance in db
    pg.connect(connectionString, function(err, client, done) {

      var query = client.query(sql, function(err, result) {
        if(err) {
            console.error('error running query', err);
            callback({ status: 500, msg: 'Something broke!'});;
          }
      });

      var results = [];

      query.on('row', function(row) {
        results.push(row);
      });

      query.on('end', function() {
        client.end();
        callback({ status: 200, results: results });
      });

      if(err) {
        console.log(err);
        callback({ status: 500, msg: 'Something broke!'});
      }

    });
  };

  this.create = function(params, callback){
    // build sql
    var fieldsArray = Object.keys(params);
    var valuesArray = Object.keys(params).map(function(key){
      return "'" + params[key] + "'";
    });

    var fields = ' ('+ fieldsArray.join(', ') +')';
    var values = ' VALUES (' + valuesArray.join(', ') +')';
    var sql    = ' INSERT INTO ' + table + fields +values + ';';

    // insert in database
    pg.connect(connectionString, function(err, client, done) {

        var query = client.query(sql, function(err, result) {
          if(err) {
            console.error('error running query', err);
            callback({ status: 500, msg: 'Something broke!'});
          }
        });

        query.on('end', function() {
          client.end();
          callback({ status: 201, msg: 'sucess'});
        });

        if(err) {
          console.log(err);
          callback({ status: 500, msg: 'Something broke!'});
        }

    });
  };

  this.update = function(id, params, callback){


    // build sql
    var valuesArray = Object.keys(params).map(function(key){
      if(key != 'id'){
        return key + " = '" + params[key] + "'";
      } else {
        return null;
      }
    });

    var values = valuesArray.filter(function(val) {
       return val !== null;
    }).join(', ');

    var sql = ' UPDATE ' + table + ' SET ' + values + ' WHERE id = ' + id +';';

    // update in database
    pg.connect(connectionString, function(err, client, done) {

        var query = client.query(sql, function(err, result) {
          if(err) {
            console.error('error running query', err);
            callback({ status: 500, msg: 'Something broke!'});
          }
        });

        query.on('end', function() {
          client.end();
          callback({ status: 200, msg: 'sucess'});
        });

        if(err) {
          console.log(err);
          callback({ status: 500, msg: 'Something broke!'});
        }

    });
  };

  this.delete = function(id, callback){

    // Build sql
    var sql = "DELETE FROM " + table
    + " WHERE id = " + id + ';';

    // Delete instance in db
    pg.connect(connectionString, function(err, client, done) {

      var query = client.query(sql, function(err, result) {
        if(err) {
            console.error('error running query', err);
            callback({ status: 500, msg: 'Something broke!'});;
          }
      });

      var results = [];

      query.on('row', function(row) {
        results.push(row);
      });

      query.on('end', function() {
        client.end();
        callback({ status: 200, results: results });
      });

      if(err) {
        console.log(err);
        callback({ status: 500, msg: 'Something broke!'});
      }

    });
  };


}
