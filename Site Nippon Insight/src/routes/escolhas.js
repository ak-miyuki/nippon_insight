var express = require("express");
var router = express.Router();

var escolhasController = require("../controllers/escolhasController");

router.get("/:idViagem", function (req, res) {
  escolhasController.buscarEscolhasPorViagem(req, res);
});

router.post("/cadastrar", function (req, res) {
  escolhasController.cadastrar(req, res);
});

module.exports = router;