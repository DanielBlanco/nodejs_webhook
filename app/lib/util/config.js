const dotenv = require("dotenv");
const path = require("path");
const knex = require("knex");
const knexConfig = require(`${process.cwd()}/knexfile`);

/**
 * Loads environment variables with dotenv.
 */
exports.loadEnv = () => {
  let envPath = path.resolve(process.cwd(), "config", ".env");
  let result = dotenv.config({ path: envPath });
  if (result.error) {
    throw result.error;
  }
  return result.parsed;
};

/**
 * Returns node environment (defaults to development).
 */
exports.environment = () => process.env.NODE_ENV || "development";

/**
 * Loads the database object using Knex tool.
 */
exports.db = () => {
  return knex(knexConfig[this.environment]);
};
