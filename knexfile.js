require(`${process.cwd()}/app/lib/util/config`).loadEnv();

module.exports = {
  development: {
    debug: false,
    client: "postgresql",
    connection: process.env.PG_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.PG_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
