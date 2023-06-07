var database = require("../database/config");

function buscarUltimasMedidas(idAluno) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
	Sessao.NotaAluno AS Nota,
    DATE_FORMAT(Sessao.DataSessao, '%d/%m%Y') AS Data,
    Treino.Tipo AS Treino,
    Aluno.nomeAluno AS Nome_Aluno FROM Sessao
		JOIN Aluno ON idAluno = fkAluno
			JOIN Treino ON idTreino = fkTreino WHERE Aluno.idAluno = ${idAluno}
				 ORDER BY Sessao.DataSessao DESC LIMIT 4 ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAlunosEscolinha(idEscolinha) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
	        idAluno AS CodigoAluno,
            nomeAluno AS NomeAluno,
            Posicao AS Posicao,
            DATE_FORMAT(DataNasc, '%d/%m/%Y') AS DataNasc,
            TelefoneCelular AS Telefone FROM Aluno WHERE fkEscolinha = ${idEscolinha};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarAlunosEscolinha
}
