exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("webhooks", table => {
      table.increments("id").primary();
      table.string("event");
      table.string("url");

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("webhooks")]);
};
