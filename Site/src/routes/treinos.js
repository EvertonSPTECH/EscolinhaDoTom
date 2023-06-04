var express = require("express");
var router = express.Router();

var treinoController = require("../controllers/treinoController");

// router.post("/treinoAluno", function (req, res) {
//     treinoController.treinoAluno(req, res);
// })

router.post("/buscarAluno", function (req, res) {
    treinoController.buscarAluno(req, res);
});

router.get("/listarAlunos", function (req, res) {
    treinoController.listarAlunos(req, res);
});

router.post("/inserirDadosTreino", function (req, res){
    treinoController.inserirDadosTreino(req, res);
})
module.exports = router;