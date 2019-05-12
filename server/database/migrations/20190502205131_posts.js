exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", function(table) {
    table.increments();
    table.string("image");
    table.string("title");
    table.string("description");
    table.string("genre");
    table.integer("userId");
    table.string("created_at");
    table.string("updated_on");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
