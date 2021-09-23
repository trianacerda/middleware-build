const fs = require('fs');

module.exports = (pool) => {
  return fs
    .readFile('./sql/setup.sql', { encoding: 'utf-8' })
    .then((sql) => pool.query(sql));
};
