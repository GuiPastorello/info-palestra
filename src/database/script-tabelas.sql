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
nome VARCHAR(45) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
senha VARCHAR(15) NOT NULL
);

CREATE TABLE tentativa (
id_tentativa INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT NOT NULL,
acertos INT,
hora_inicio DATETIME DEFAULT (current_timestamp()) NOT NULL,
hora_fim DATETIME,
CONSTRAINT cfk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario) 
) auto_increment = 1000;


DESC usuario;

INSERT INTO usuario (nome, email, senha) VALUES
('Guilherme', 'gui@email.com', 'Senha123');

SELECT * FROM usuario;
SELECT * FROM tentativa;