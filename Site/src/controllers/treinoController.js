var treinoModel = require("../models/treinoModel");


function listarAlunos(req, res) {
    treinoModel.listarAlunos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function buscarAluno(req, res) {
    var CodigoAluno = req.body.CodigoAlunoServer

    if (CodigoAluno == undefined) {
        res.status(400).send("O código do aluno está undefined!");
    } else {
        treinoModel.buscarAluno(CodigoAluno)
            .then(function (resultado) {
                if (resultado.length == 1) {
                    // res.status(200).json(resultado);
                    res.json(resultado[0]);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


}

// function treinoAluno(req, res) {
//     var nomeAluno = req.body.NomeAlunoServer;
//     var notaFisico = req.body.NotaFisicoServer;
//     var notaFundamentos = req.body.NotaFundamentosServer;
//     var notaTatico = req.body.NotaTaticoServer;
//     var notaColetivo = req.body.NotaColetivoServer;

//     if (nomeAluno == undefined) {
//         res.status(400).send("O nome do aluno está undefined!");
//     } else if (notaFisico == undefined) {
//         res.status(400).send("A nota do treino físico está undefined!");
//     } else if (notaFundamentos == undefined) {
//         res.status(400).send("A nota do treino fundamentos está undefined!");
//     } else if (notaTatico == undefined) {
//         res.status(400).send("A nota do treino tático está undefined!");
//     } else if (notaColetivo == undefined) {
//         res.status(400).send("A nota do treino coletivo está undefined!");
//     } else {

//         treinoModel.buscarAluno(CodigoAluno)
//             .then(
//                 function (resultado) {
//                     console.log(`\nResultados encontrados: ${resultado.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                     if (resultado.length == 1) {
//                         console.log(resultado);
//                         res.json(resultado[0]);


//                         treinoModel.inserirNotasTreinos(notaFisico, notaFundamentos, notaTatico, notaColetivo)
//                             .then(
//                                 function (resultado) {
//                                     res.json(resultado);
//                                 }
//                             ).catch(
//                                 function (erro) {
//                                     console.log(erro);
//                                     console.log(
//                                         "\nHouve um erro ao realizar o envio dos dados dos treinos! Erro: ",
//                                         erro.sqlMessage
//                                     );
//                                     res.status(500).json(erro.sqlMessage);
//                                 }
//                             );


//                     } else if (resultado.length == 0) {
//                         res.status(403).send("Aluno não está cadastrado na escolinha");
//                     } else {
//                         res.status(403).send("Mais de um aluno com o mesmo nome!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar a consulta do nome do aluno! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }

module.exports = {
    // treinoAluno,
    buscarAluno,
    listarAlunos
}