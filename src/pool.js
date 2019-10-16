const { Pool } = require('pg');
const pool = new Pool({
  connectionString:'postgres://ifbgwbkf:RNUD_ama46QguLP3hmtAEE0HJRpP37ZU@salt.db.elephantsql.com:5432/ifbgwbkf'
});





module.exports = pool;