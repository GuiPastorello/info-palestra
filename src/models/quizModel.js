var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(fk_usuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_usuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativa (fk_usuario) VALUES (${fk_usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para atualizar a última tentativa com acertos e data de conclusão
function atualizar(acertos, fk_usuario) {
    console.log("ACESSEI O QUIZ MODEL - ATUALIZAR \n\nfunction atualizar():", acertos, fk_usuario);
    
    // Atualiza a última tentativa deste usuário (a mais recente)
    var instrucaoSql = `
        UPDATE tentativa 
        SET acertos = ${acertos}, hora_fim = NOW() 
        WHERE fk_usuario = ${fk_usuario} 
        ORDER BY id_tentativa DESC 
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para pegar o ID da última tentativa 
// function obterUltimaTentativa(fk_usuario) {
//     console.log("ACESSEI O QUIZ MODEL - OBTER ULTIMA TENTATIVA \n\nfunction obterUltimaTentativa():", fk_usuario);
    
//     var instrucaoSql = `
//         SELECT id_tentativa FROM tentativa 
//         WHERE fk_usuario = ${fk_usuario} 
//         ORDER BY id_tentativa DESC 
//         LIMIT 1;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    cadastrar,
    atualizar
};