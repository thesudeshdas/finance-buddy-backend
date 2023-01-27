const { Pool } = require('pg');

export const pool = new Pool({
  user: 'dash',
  database: 'fish',
  password: 'password',
  port: 5432,
  host: 'localhost',
});
