exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", function(table) {
    table.increments();
    table.integer("storeId");
    table.integer("categoryId");
    table.string("name");
    table.string("description");
    table.decimal("price");
    table.integer("qty");
    table.integer("minReOrder");
    table.string("flagship_YN", 1);
    table.decimal("rating");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("items");
};
