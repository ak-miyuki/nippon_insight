var database = require("../database/config");


//buscar todos os itens
function buscarItens() {
  
  var instrucaoSql = `SELECT * FROM item;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


// buscar itens por usuário
function buscarItensPorViagem(idViagem, fkItem) {
  
  var instrucaoSql = `SELECT * FROM vw_itensUsuario WHERE idViagem = ${idViagem}; AND fkItem = ${fkItem}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarItens,
  buscarItensPorViagem
}
