exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table
      .string("username")
      .unique()
      .notNullable();
    table.string("nameLast");
    table.string("nameFirst");
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("password", 100).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
