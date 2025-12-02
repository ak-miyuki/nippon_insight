var database = require("../database/config");

function buscarVotosLugares() {

  var instrucaoSql = `SELECT * FROM vw_votosLugares;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function buscarEscolhasPorViagem(idViagem) {

  var instrucaoSql = `SELECT * FROM vw_valorCategoria WHERE idViagem = ${idViagem};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function buscarEscolhaEspecifica(fkViagem, fkItem) {

  var instrucaoSql = `SELECT * FROM escolha WHERE fkViagem = ${fkViagem} AND fkItem = ${fkItem};`;

  console.log("Executando SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function cadastrar(fkViagem, fkItem, qtd) {

  var instrucaoSql = `INSERT INTO escolha (fkViagem, fkItem, qtd) VALUES (${fkViagem}, ${fkItem}, ${qtd})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function atualizarEscolhas(fkViagem, fkItem, qtd) {

  var instrucaoSql = `UPDATE escolha SET qtd = ${qtd} WHERE fkViagem = ${fkViagem} AND fkItem = ${fkItem};`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarVotosLugares,
  buscarEscolhasPorViagem,
  buscarEscolhaEspecifica,
  cadastrar,
  atualizarEscolhas
}
