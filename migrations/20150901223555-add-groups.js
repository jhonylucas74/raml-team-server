var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('groups', {
    id:            { type: 'int', primaryKey: true, autoIncrement: true },
    name:          { type: 'string', notNull: true },
    avatar:        { type: 'string', notNull: true }

  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('groups', callback);
};
