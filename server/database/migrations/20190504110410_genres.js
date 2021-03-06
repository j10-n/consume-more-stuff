exports.up = function(knex, Promise) {
  return knex.schema.createTable("genres", function(table) {
    table.increments();
    table.string("name").unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("genres");
};
