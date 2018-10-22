const dotenv = require("dotenv");
const path = require("path");
const knex = require("knex");

/**
 * Loads environment variables with dotenv.
 */
let loadEnv = () => {
  if (process.env.PG_URL) {
    return process.env;
  }
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
let environment = () => process.env.NODE_ENV || "development";

/**
 * Loads the database object using Knex tool.
 */
let db = () => {
  const knexConfig = require(`${process.cwd()}/knexfile`);
  return knex(knexConfig[environment()]);
};

module.exports = { loadEnv, environment, db };
