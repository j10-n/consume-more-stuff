exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("nameLast");
    table.string("nameFirst");
    table.string("email").unique();
    table.string("hashedPassword");
    table.string("phone");
    table.string("verified_YN", 1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
