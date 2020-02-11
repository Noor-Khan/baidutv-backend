import Knex from "knex";
const dotenv = require("dotenv");

dotenv.config();

let knex;
try {
  knex = Knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 5432
    }
  });
} catch (e) {
  console.log(e);
}

export default knex;
