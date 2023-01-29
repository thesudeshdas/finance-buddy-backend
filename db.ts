const { Pool } = require('pg');

export const pool = new Pool({
  user: 'dash',
  database: 'finance-buddy',
  password: 'password',
  port: 5432,
  host: 'localhost',
});

// export const pool = new Pool({
//   connectionString:
//     'postgres://dash:L89QpTqb71laa0WTr6423oVHtGKwSxcl@dpg-cfakcahgp3jsh6fisang-a.oregon-postgres.render.com/ocean_fgmi?ssl=true',
// });
