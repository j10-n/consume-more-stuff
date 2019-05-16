
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.integer("genreId").references('genres.id');
    t.dropColumn('genre');
    t.dropColumn('userId');
    t.boolean('is_voided').default(false);
    t.dropColumn('created_at');
    t.dropColumn('updated_on');
  })
  .then(()=>{
    return knex.schema.table('posts', (t) => {
      t.integer("userId").references('users.id');
      t.timestamps(true, true);
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', (t) => {
    t.integer("genre");
    t.dropColumn('genreId');
    t.renameColumn('userId','u');
    t.dropColumn('is_voided');
    t.dropTimestamps();
  })
  .then(()=>{
    return knex.schema.table('posts', (t) => {
      t.integer("userId");
      t.dropColumn('u');
      t.string('created_at');
      t.string('updated_on');
    })
  })
};
