var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('permissions', {
    id:            { type: 'int', primaryKey: true, autoIncrement: true },
    role:          { type: 'string', notNull: true },
    user_id:  {
      type: 'int',
      notNull: true ,
      foreignKey: { table: 'users' },
      mapping:    { user_id: 'id' }
    },
    project_id:  {
      type: 'int',
      notNull: true ,
      foreignKey: { table: 'projects' },
      mapping:    { project_id: 'id' }
    }

  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('permissions', callback);
};
