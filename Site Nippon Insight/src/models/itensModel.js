var database = require("../database/config");

function buscarItens() {
  
  var instrucaoSql = `SELECT * FROM item`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarItens
}
