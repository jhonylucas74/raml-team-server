  // set up ========================
  var express        = require('express');
  var morgan         = require('morgan');
  var bodyParser     = require('body-parser');
  var methodOverride = require('method-override');
  var pg             = require('pg');
  var multer         = require('multer');

  var app = express();

  // configuration =================
  app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
  app.use(morgan('dev'));                                         // log every request to the console
  app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
  app.use(bodyParser.json());                                     // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
  app.use(methodOverride());
  app.use(multer({ dest: './public/uploads/'}));

  // load the routes
  require('./config/routes')(app);

  // listen (start app with node server.js) ======================================
  var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
  var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

  app.listen(server_port, server_ip_address, function(){
    console.log("Listening on " + server_ip_address + ", server_port " + server_port);
  });
