var database = require("../database/config")

function listarAlunos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Alunos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarAluno(CodigoAluno) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarAluno(): ", CodigoAluno)
    var instrucao = `
    SELECT nomeAluno FROM Aluno WHERE idAluno = ${CodigoAluno};
    `

    console.log("Executando a instrução SQL :\n" +instrucao)
    return database.executar(instrucao);
}

function inserirDadosTreino(CodigoAluno, notaFisico, notaFundamentos, notaTatico, notaColetivo){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", CodigoAluno, notaFisico, notaFundamentos, notaTatico, notaColetivo);

    var instrucao = `
        INSERT INTO Sessao (idSessao, DataSessao, NotaAluno, fkTreino, fkAluno) VALUES 
        (null, now(), '${notaFisico}', 1 , '${CodigoAluno}'),
        (null, now(), '${notaFundamentos}', 2 , '${CodigoAluno}'),
        (null, now(), '${notaTatico}', 3 , '${CodigoAluno}'),
        (null, now(), '${notaColetivo}', 4 , '${CodigoAluno}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarAluno,
    listarAlunos,
    inserirDadosTreino
};