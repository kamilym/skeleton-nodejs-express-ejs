const db = require ("../db")

class Autor{
  static async inserir(data){
    const connect = await db.connect();
    const sql = "insert into autores (nome, sobrenome, datanascimento) values ($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql, values);
    
  }
  
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("select * from autores");
  }
  
  static async atualizar(data, id){
    const connect = await db.connect();
    const sql = "update autores set nome=$1, sobrenome=$2, datanascimento=$3, id=$4";
    const values = [data.nome, data.sobrenome, data.datanascimento, id]
    return await connect.query(sql, values);
  }
  
  static async deletar(){
    
    
  }
  
}
module.exports = Autor;
