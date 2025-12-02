var express = require("express");
var router = express.Router();

var escolhasController = require("../controllers/escolhasController");

router.get("/buscarVotosLugares", function (req, res) {
  escolhasController.buscarVotosLugares(req, res);
});

router.get("/:idViagem", function (req, res) {
  escolhasController.buscarEscolhasPorViagem(req, res);
});

router.post("/salvar", function (req, res) {
  escolhasController.salvar(req, res);
});

router.post("/cadastrar", function (req, res) {
  escolhasController.cadastrar(req, res);
});

router.post("/atualizarEscolhas", function (req, res) {
  escolhasController.atualizarEscolhas(req, res);
});



module.exports = router;