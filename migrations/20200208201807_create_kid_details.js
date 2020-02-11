exports.up = function(knex) {
  return knex.schema.createTable("kid_details", function(t) {
    t.increments().primary();
    t.integer("kid_id").unsigned();
    t.foreign("kid_id").references("kids.id");
    t.smallint("interest");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("kid_details");
};
