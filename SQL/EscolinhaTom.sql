CREATE DATABASE EscolinhaTom;

USE EscolinhaTom;


CREATE TABLE Escolinha(
	idEscolinha INT PRIMARY KEY AUTO_INCREMENT,
    nomeTime VARCHAR(45),
    email VARCHAR(45),
    telefoneFixo CHAR(10),
    telefoneCelular CHAR(11),
    CEP CHAR (8),
    Numero VARCHAR (45),
    Senha CHAR(8)
);

INSERT INTO Escolinha VALUES
(null, 'Paris Sarandi SC', 'parissarandi@gmail.com', '1112345678', '11912345678', '08490490', '7', '12345678');

SELECT * FROM Aluno;

CREATE TABLE Professor(
	idProfessor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    telefoneCelular CHAR(11),
    Senha CHAR(8),
    fkEscolinha INT, CONSTRAINT fkProfessorEscolinha FOREIGN KEY (fkEscolinha) REFERENCES Escolinha (idEscolinha)
);

CREATE TABLE Aluno(
	idAluno INT PRIMARY KEY AUTO_INCREMENT,
    nomeAluno VARCHAR(45),
    emailAluno VARCHAR(45),
		TelefoneCelular CHAR(11),
    DataNasc DATE,
    Posicao VARCHAR (45),
    Senha CHAR (8),
    fkEscolinha INT, CONSTRAINT fkAlunoEscolinha FOREIGN KEY (fkEscolinha) REFERENCES Escolinha (idEscolinha)
);

INSERT INTO Aluno VALUES
(null, 'Fernando Varjão', 'junior@gmail.com', '11912345678', '2006-12-13', 'Goleiro', '87654321', 1);

CREATE TABLE Treino(
	idTreino INT PRIMARY KEY AUTO_INCREMENT,
    Tipo VARCHAR(45),
    Descricao VARCHAR (45)
);

INSERT INTO Treino VALUES
(null, 'Fisico', 'Fortalecimento e Resistência'),
(null, 'Fundamentos', 'Controle de Bola, Passes e Finalização'),
(null, 'Tatico', 'Posicionamento e Noção de Jogo'),
(null, 'Coletivo', 'Envolve todos os treinos e Entrosamento');

SELECT * FROM Sessao;
SELECT 
	Sessao.NotaAluno AS Nota,
    DATE_FORMAT(Sessao.DataSessao, '%d/%m%Y') AS Data,
    Treino.Tipo AS Treino,
    Aluno.nomeAluno AS Nome_Aluno FROM Sessao
		JOIN Aluno ON idAluno = fkAluno
			JOIN Treino ON idTreino = fkTreino WHERE Aluno.idAluno = 1
				 ORDER BY Sessao.DataSessao DESC LIMIT 4 ;

CREATE TABLE Sessao(
	idSessao INT AUTO_INCREMENt,
    DataSessao DATETIME,
    NotaAluno INT,
    fkTreino INT, CONSTRAINT fkTreinoSessao FOREIGN KEY (fkTreino) REFERENCES Treino (idTreino),
    fkAluno INT, CONSTRAINT fkSessaoAluno FOREIGN KEY (fkAluno) REFERENCES Aluno (idAluno),
    CONSTRAINT pkSessao PRIMARY KEY (idSessao, fkAluno)
);

SELECT * FROM Aluno;
DROP TABLE Aluno;
DROP TABLE Sessao;

SELECT nomeAluno FROM Aluno WHERE idAluno = 3;

SELECT * FROM Escolinha;
SELECT * FROM Professor;	
SELECT Professor.nome, Aluno.nomeAluno, Aluno.Posicao, Escolinha.nomeTime FROM Escolinha
	LEFT JOIN Professor ON Escolinha.idEscolinha = Professor.fkEscolinha 
		JOIN Aluno ON Escolinha.idEscolinha = Aluno.fkEscolinha;
        
SELECT 
	idAluno as "Codigo Aluno",
    nomeAluno as "Nome Aluno",
    Posicao as "Posição Aluno",
    DATE_FORMAT(dataNasc, '%d/%m/%Y') as "Data Nascimento",
    telefoneCelular as "Telefone Aluno"
 FROM Aluno;
 
 SELECT 
	Aluno.nomeAluno AS Nome_Aluno,
    Treino.Tipo AS Treino,
    Sessao.NotaAluno AS Nota,
    DATE_FORMAT(DataSessao, '%d/%m/%Y') AS Data_Treino
FROM Aluno 
	JOIN Sessao ON idAluno = fkAluno 
	JOIN Treino ON idTreino = fkTreino
    LIMIT 20;
    