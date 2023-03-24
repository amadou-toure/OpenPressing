const Pool = require('pg').Pool
const pool = new Pool ({
    user:'postgres',
    host:'localhost',
    database:'open-pressing',
    password:'amadamI0211',
    port:5432,
})

module.exports = pool;