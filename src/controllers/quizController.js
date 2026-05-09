var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   
    var fk_usuario = req.body.fk_usuarioServer;
    var acertos = req.body.acertosServer;

    // Faça as validações dos valores
    if (fk_usuario == undefined) {
        res.status(400).send("Seu fk_usuario está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(acertos, fk_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    cadastrar
}