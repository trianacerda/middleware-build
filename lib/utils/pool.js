const pg = require('pg');

module.exports = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false },
});

pg.on('connect', () => console.log('Postgres connected'));
