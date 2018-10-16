# nodejs_webhook
Webhook service on Nodejs (learning experience)


### How to start

- Clone the app.
- Copy `config/.env.example` to `config/.env` and add your database credentials.
- Create the databases in your PostgreSQL server (manually).
- Install knex CLI: `npm install knex -g`
- Run migrations with: `knex migrate:latest`
