exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("username").unique();
    table.string("nameLast");
    table.string("nameFirst");
    table.string("email").unique();
    table.string("hashedPassword");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
