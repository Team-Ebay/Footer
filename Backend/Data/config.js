const { Pool } = require('pg')

const pool = new Pool({
  user:'anthony',
  host:'localhost',
  database:'footer',
  password:'password',
  port:5432
})

module.exports = pool;