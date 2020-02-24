exports.up = function (knex) {
  return knex.schema.table("users", function (t) {
    t.string("user_id");
    t.string("name");
  })
};

exports.down = function (knex) {
  return knex.schema.table("users", function (t) {
    t.dropColumn("user_id");
    t.dropColumn("name");
  })
};