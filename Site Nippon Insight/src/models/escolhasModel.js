var database = require("../database/config");

function buscarEscolhasPorViagem(idViagem) {
  
  var instrucaoSql = `SELECT * FROM escolha WHERE fkViagem = ${idViagem}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(fkViagem, fkItem, qtd) {
  
  var instrucaoSql = `INSERT INTO viagem (fkViagem, fkItem, qtd) VALUES (${fkViagem}, '${fkItem}', '${qtd}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarEscolhasPorViagem,
  cadastrar
}
