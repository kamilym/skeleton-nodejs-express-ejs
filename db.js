let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }
   const { Pool } = require("pg");
  const pool = new Pool ({
    connectionString: "postgres://qoynqddh:NEbDGTAsOJyi6JfAz-ek7OT5oqjKgmPt@kesavan.db.elephantsql.com/qoynqddh";
  })
  global.connection = pool
  return pool.connect();
}
module.exports = { connect }