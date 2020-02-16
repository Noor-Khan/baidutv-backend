exports.up = function(knex) {
  return knex.schema.createTable("kids", function(t) {
    t.increments().primary();
    t.string("parent_name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("kids");
};
