var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fk_usuario = req.body.fk_usuarioServer;

    // Faça as validações dos valores
    if (fk_usuario == undefined) {
        res.status(400).send("Seu fk_usuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(fk_usuario)
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

function atualizar(req, res) {
    var acertos = req.body.acertosServer;
    var fk_usuario = req.body.fk_usuarioServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    } else if (fk_usuario == undefined) {
        res.status(400).send("Seu fk_usuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.atualizar(acertos, fk_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atualização! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function desempenhoGeral(req, res) {
    quizModel.desempenhoGeral().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os acertos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// function buscarAquariosPorEmpresa(req, res) {
//   var idUsuario = req.params.idUsuario;

//   aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
//     if (resultado.length > 0) {
//       res.status(200).json(resultado);
//     } else {
//       res.status(204).json([]);
//     }
//   }).catch(function (erro) {
//     console.log(erro);
//     console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
//     res.status(500).json(erro.sqlMessage);
//   });
// }

module.exports = {
    cadastrar,
    atualizar,
    desempenhoGeral
};