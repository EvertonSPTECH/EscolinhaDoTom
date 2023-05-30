var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarAluno", function (req, res) {
    usuarioController.cadastrarAluno(req, res);
})


router.post("/cadastrarProfessor", function (req, res) {
    usuarioController.cadastrarProfessor(req, res);
})

router.post("/autenticarAluno", function (req, res) {
    usuarioController.entrarAluno(req, res);
});

router.post("/autenticarProfessor", function (req, res) {
    usuarioController.entrarProfessor(req, res);
});

module.exports = router;