CREATE DATABASE EscolinhaTom;

USE EscolinhaTom;

CREATE TABLE Escolinha(
	idEscolinha INT PRIMARY KEY AUTO_INCREMENT,
    nomeTime VARCHAR(45),
    email VARCHAR(45),
    telefoneFixo CHAR(10),
    telefoneCelular CHAR(11),
    CEP CHAR (8),
    Estado VARCHAR (45),
    Cidade VARCHAR (45),
    Bairro VARCHAR (45),
    Rua VARCHAR (45),
    Numero VARCHAR (45),
    Senha CHAR(8)
);

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

CREATE TABLE Treino(
	idTreino INT,
    Tipo VARCHAR(45),
    TamanhoTreino CHAR(1), CONSTRAINT ckTramanhoTreino CHECK (TamanhoTreino IN ('P', 'M', 'G'))
);

CREATE TABLE Sessao(
	idSessao INT,
    DataSessao DATETIME,
    Duracao TIME,
    NotaAluno INT,
    fkTreino INT, CONSTRAINT fkTreinoSessao FOREIGN KEY (fkTreino) REFERENCES Treino (idTreino),
    fkAluno INT, CONSTRAINT fkSessaoAluno FOREIGN KEY (fkAluno) REFERENCES Aluno (idAluno),
    CONSTRAINT pkSessao PRIMARY KEY (idSessao, fkAluno)
);

SELECT * FROM Aluno;
SELECT * FROM Escolinha;
SELECT * FROM Professor;	
SELECT Professor.nome, Aluno.nomeAluno, Aluno.Posicao, Escolinha.nomeTime FROM Escolinha
	LEFT JOIN Professor ON Escolinha.idEscolinha = Professor.fkEscolinha 
		JOIN Aluno ON Escolinha.idEscolinha = Aluno.fkEscolinha;