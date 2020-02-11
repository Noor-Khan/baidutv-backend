exports.up = function(knex) {
  return knex.schema.createTable("users", function(t) {
    t.increments().primary();
    t.string("email");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
