exports.up = function(knex) {
  return knex.schema.createTable("kids", function(t) {
    t.increments().primary();
    t.string("parent_name");
    t.string("kid_name");
    t.integer("age");
    t.smallint("gender");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("kids");
};
