-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE infoPalestra;
USE infoPalestra;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nickname VARCHAR(20) NOT NULL,
email VARCHAR(20) NOT NULL,
senha VARCHAR(15) NOT NULL
);

CREATE TABLE questao (
id INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(255)
);

CREATE TABLE tentativa (
id_tentativa INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT NOT NULL,
hora_inicio TIME DEFAULT (CURRENT_TIME),
hora_fim TIME,
CONSTRAINT cfk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario) 
) auto_increment = 1000;

CREATE TABLE respostaQuestao(
id_resposta INT,
fk_questao INT ,
fk_tentativa INT,
acertou TINYINT,
PRIMARY KEY (id_resposta, fk_questao),
CONSTRAINT cfk_questao FOREIGN KEY (fk_questao) REFERENCES questao(id),
CONSTRAINT cfk_tentativa FOREIGN KEY (fk_tentativa) REFERENCES tentativa(id_tentativa)
);

SELECT * FROM usuario;

