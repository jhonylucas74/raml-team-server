var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('projects', {
    id:            { type: 'int', primaryKey: true, autoIncrement: true },
    name:          { type: 'string', notNull: true },
    file:          { type: 'string', notNull: true },
    group_id:  {
      type: 'int',
      notNull: true ,
      foreignKey: { table: 'groups' },
      mapping:    { group_id: 'id' }
    }

  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('projects', callback);
};
