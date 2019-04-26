exports.up = knex => {
  return knex.schema.createTable("posts", t => {
    t.increments("id")
      .primary()
      .unsigned();
    t.string("title");
    t.text("description");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("posts");
};
