exports.up = function (knex) {
  return knex.schema.createTable("kid_details", function (t) {
    t.increments().primary();
    t.string("kid_name");
    t.integer("age");
    t.string("gender");
    t.string("interest");
    t.integer("kid_id").unsigned();
    t.foreign("kid_id").references("kids.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("kid_details");
};