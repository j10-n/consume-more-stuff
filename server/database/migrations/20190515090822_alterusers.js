
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (t) => {
    t.dropColumn('username');
    t.dropColumn('email');
    t.timestamps(true, true);
  })
  .then(()=>{
    return knex.schema.table('users', (t) => {
      t.string("username").unique().notNullable();
      t.string("email").unique().notNullable();
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (t) => {
    t.dropColumn('username');
    t.dropColumn('email');
    t.dropTimestamps();
  })
  .then(()=>{
    return knex.schema.table('users', (t) => {
      t.string("username").unique();
      t.string("email").unique();
    })
  })
};
