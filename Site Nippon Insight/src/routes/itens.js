var express = require("express");
var router = express.Router();

var itensController = require("../controllers/itensController");

router.get("/", function (req, res) {
  itensController.buscarItens(req, res);
});

module.exports = router;