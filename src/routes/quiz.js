var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/atualizar", function (req, res) {
    quizController.atualizar(req, res);
})

router.get("/desempenho-geral", function(req, res){
    quizController.desempenhoGeral(req,res);
})
router.get("/leaderboard", function(req, res){
    quizController.listarLeaderboard(req, res);
})
router.get("/melhor-tentativa/:fk_usuario", function(req, res){
    quizController.listarMelhorTentativa(req, res);
})
router.get("/melhor-tempo/:fk_usuario", function(req, res){
    quizController.listarMelhorTempo(req, res);
})

module.exports = router;