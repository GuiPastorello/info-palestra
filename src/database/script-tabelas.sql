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

INSERT INTO usuario (nome, email, senha) VALUES
('Amanda', 'amanda@email.com', 'Amanda123'),
('Carlos', 'carlos@email.com', 'Carlos123'),
('Fernanda', 'fernanda@email.com', 'Fer12345'),
('Lucas', 'lucas@email.com', 'Lucas2024'),
('Juliana', 'juliana@email.com', 'Ju123456'),
('Pedro', 'pedro@email.com', 'Pedro321'),
('Camila', 'camila@email.com', 'Camila987'),
('Rafael', 'rafael@email.com', 'Rafa2025'),
('Beatriz', 'beatriz@email.com', 'Bia12345'),
('Thiago', 'thiago@email.com', 'Thiago999');


INSERT INTO tentativa (fk_usuario, acertos, hora_inicio, hora_fim) VALUES
(1, 8, '2026-05-15 10:00:00', '2026-05-15 10:20:00'),
(2, 5, '2026-05-15 11:00:00', '2026-05-15 11:18:00'),
(3, 10, '2026-05-15 12:00:00', '2026-05-15 12:25:00'),
(4, 7, '2026-05-15 13:10:00', '2026-05-15 13:28:00'),
(5, 6, '2026-05-15 14:00:00', '2026-05-15 14:15:00'),
(6, 9, '2026-05-15 15:00:00', '2026-05-15 15:30:00'),
(7, 4, '2026-05-15 16:00:00', '2026-05-15 16:10:00'),
(8, 8, '2026-05-15 17:00:00', '2026-05-15 17:22:00'),
(9, 3, '2026-05-15 18:00:00', '2026-05-15 18:12:00'),
(10, 10, '2026-05-15 19:00:00', '2026-05-15 19:35:00'),
(11, 7, '2026-05-15 20:00:00', '2026-05-15 20:18:00');


-- Grafico de Desempenho Geral
SELECT
(
    SELECT COUNT(*)
    FROM tentativa t
    WHERE t.acertos BETWEEN 0 AND 4
) AS '0_a_4',

(
    SELECT COUNT(*)
    FROM tentativa t
    WHERE t.acertos BETWEEN 5 AND 9
) AS 'z',

(
    SELECT COUNT(*)
    FROM tentativa t
    WHERE t.acertos >= 10
) AS '10_ou_mais';


-- LEADERBOARD
SELECT u.nome,
 t.acertos,
 timestampdiff(SECOND, hora_inicio, hora_fim) as tempoGasto
FROM usuario u
 JOIN tentativa t
 ON t.fk_usuario = u.id_usuario
ORDER BY acertos AND tempoGasto DESC LIMIT 10;

-- MELHOR TEMPO
SELECT 
timestampdiff(SECOND, hora_inicio, hora_fim) as tempoGasto
FROM tentativa
WHERE fk_usuario = 1 ORDER BY tempoGasto ASC LIMIT 1;