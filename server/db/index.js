// const { Pool } = require('pg');

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: 'Home_4014444',
//   database: 'wineries',
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };





// HEROKU
const { Pool } = require("pg");

const connectionString =
  process.env.DATABASE_URL ||
  "postgres://postgres:Home_4014444@localhost:5432/wineries";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
