let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }
  
  const { Pool } = require("pg");
  const pool = new Pool ({
    connectionString: "postgres://wjvofaux:O8Q3ntFKlJ_ABoqxK3hr5U5R-hUNzcgK@tuffi.db.elephantsql.com/wjvofaux"
  })
  
  global.connection = pool
  return pool.connect();
}
module.exports = { connect }