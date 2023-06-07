var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    var idAluno = req.params.idAluno;

    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarUltimasMedidas(idAluno).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAlunosEscolinha(req, res) {
    var idEscolinha = req.params.idEscolinha;

    console.log(`Recuperando dados dos alunos cadastrados na escolinha`);

    medidaModel.buscarAlunosEscolinha(idEscolinha).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarAlunosEscolinha
}