// Routes manager ==================================
module.exports = function(app) {
  var match = require('./match')(app);
  // All routes ===================================
  match('get', '/', 'application', 'index');
  // Say hello
  match('get', '/hello', 'application', 'hello');


  // User
  match('get', '/users', 'user', 'index');
  match('get', '/users/:id', 'user', 'show');
  match('post','/users', 'user', 'create');
  match('put', '/users/:id', 'user', 'update');
  match('delete', '/users/:id', 'user', 'delete');

  // Project
  match('get', '/projects', 'project', 'index');
  match('get', '/projects/:id', 'project', 'show');
  match('post','/projects', 'project', 'create');
  match('put', '/projects/:id', 'project', 'update');
  match('delete', '/projects/:id', 'project', 'delete');

    // Permissions
    match('get', '/permissions/:id', 'permission', 'show');
    match('post','/permissions', 'permission', 'create');
    match('delete', '/permissions/:id', 'permission', 'delete');

  // Groups
  match('get', '/groups', 'group', 'index');
  match('get', '/groups/:id', 'group', 'show');
  match('post','/groups', 'group', 'create');
  match('put', '/groups/:id', 'group', 'update');
  match('delete', '/groups/:id', 'group', 'delete');

  // Members
  match('get', '/members', 'member', 'index');
  match('get', '/members/:id', 'member', 'show');
  match('post','/members', 'member', 'create');
  match('put', '/members/:id', 'member', 'update');
  match('delete', '/members/:id', 'member', 'delete');

};
