const db = require ("../db")

class Autor{
  static inserir(){
    
  }
  static async selecionar(){
    const connect = awaitdb.connect();
    return await connect.query("select * from autores");
  }
  static atualizar(){
    
  }
  static deletar(){
    
  }
}
module.exports = Autor;
