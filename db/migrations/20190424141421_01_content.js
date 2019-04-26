exports.up = function(knex, Promise) {
  return Promise.resolve().then(() =>
    knex.schema.createTable("postcontent", table => {
      table.increments();
      table.text("title");
      table.text("content");
    })
  );
};

exports.down = function(knex, Promise) {
  return Promise.resolve()
    .then(() => knex.schema.dropTable("postcontent"))
    .then(() => knex.schema.dropTable("users"));
};
