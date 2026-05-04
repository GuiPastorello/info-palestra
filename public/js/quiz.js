const listaDeQuestoes = [
        {
            pergunta: "Em que dia e mês comemoramos o aniversário de fundação do Palmeiras?",
            alternativaA: "26 de agosto",
            alternativaB: "12 de junho",
            alternativaC: "15 de novembro",
            alternativaD: "1 de setembro",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Em qual ano nasceu o nosso Verdão?",
            alternativaA: "1910",
            alternativaB: "1914",
            alternativaC: "1920",
            alternativaD: "1930",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Qual grupo teve a iniciativa de fundar o clube lá no começo da nossa história?",
            alternativaA: "Comerciantes portugueses",
            alternativaB: "Estudantes ingleses",
            alternativaC: "Imigrantes italianos",
            alternativaD: "Operários espanhóis",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Em qual cidade esses fundadores estavam radicados quando criaram a agremiação?",
            alternativaA: "Rio de Janeiro",
            alternativaB: "Minas Gerais",
            alternativaC: "Paraná",
            alternativaD: "São Paulo",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Antes de se chamar Sociedade Esportiva Palmeiras, qual foi o primeiro nome do nosso time?",
            alternativaA: "Palestra Italia",
            alternativaB: "Società Sportiva",
            alternativaC: "Clube Atlético",
            alternativaD: "Esporte Clube São Paulo",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Em qual período o Palmeiras montou o esquadrão glorioso que resultou no título da Copa Rio?",
            alternativaA: "Início dos anos 30 e fim dos anos 40",
            alternativaB: "Final da década de 40 e início dos anos 50",
            alternativaC: "Final dos anos 50 e início dos anos 60",
            alternativaD: "Início dos anos 70 e fim dos anos 80",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Em qual estádio o Palmeiras superou a Juventus da Itália na inesquecível decisão de 1951?",
            alternativaA: "Pacaembu",
            alternativaB: "Morumbi",
            alternativaC: "Maracanã",
            alternativaD: "Palestra Italia",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Aproximadamente quantas pessoas assistiram ao Verdão fazer história naquela final de 1951?",
            alternativaA: "Cerca de 30 mil torcedores",
            alternativaB: "Aproximadamente 50 mil torcedores",
            alternativaC: "Exatos 80 mil torcedores",
            alternativaD: "Superior a 100 mil torcedores",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual foi o gigante europeu que o Palmeiras derrotou para ser o Primeiro Campeão Mundial?",
            alternativaA: "Juventus da Itália",
            alternativaB: "Real Madrid da Espanha",
            alternativaC: "Benfica de Portugal",
            alternativaD: "Milan da Itália",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual era o nome da taça daquele nosso torneio internacional de 1951?",
            alternativaA: "Copa Intercontinental",
            alternativaB: "Copa Rio",
            alternativaC: "Mundialito",
            alternativaD: "Copa Toyota",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Anos mais tarde, qual entidade máxima do futebol ratificou a importância do nosso título de 51?",
            alternativaA: "CONMEBOL",
            alternativaB: "UEFA",
            alternativaC: "FIFA",
            alternativaD: "CBF",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Como a FIFA reconheceu oficialmente a Copa Rio de 1951 para a nossa alegria?",
            alternativaA: "Como um torneio amistoso de verão",
            alternativaB: "Como a precursora da Copa Libertadores",
            alternativaC: "Como uma taça estadual simbólica",
            alternativaD: "Como a primeira edição do Mundial de Clubes",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Sob o comando de qual craque o Palmeiras formou a nossa famosa 'Primeira Academia'?",
            alternativaA: "Ademir da Guia",
            alternativaB: "Marcos",
            alternativaC: "Alex",
            alternativaD: "Paulo Nunes",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Em qual ano o nosso elenco jogou tanto que foi chamado para representar a Seleção Brasileira?",
            alternativaA: "1951",
            alternativaB: "1965",
            alternativaC: "1999",
            alternativaD: "2015",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Como ficou conhecida a camisa da Seleção Brasileira que o Palmeiras teve a honra de vestir?",
            alternativaA: "Canarinho",
            alternativaB: "Manto Sagrado",
            alternativaC: "Amarelinha",
            alternativaD: "Verde-Amarela",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Contra qual país o Palmeiras jogou representando o Brasil naquele dia histórico de 1965?",
            alternativaA: "Argentina",
            alternativaB: "Itália",
            alternativaC: "Colômbia",
            alternativaD: "Uruguai",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual foi o resultado desse jogo inesquecível em que o Palmeiras foi a Seleção Brasileira?",
            alternativaA: "Vitória",
            alternativaB: "Empate",
            alternativaC: "Derrota",
            alternativaD: "O jogo foi cancelado",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual foi o apelido que o goleiro Marcos ganhou da torcida após a liderança na Libertadores de 1999?",
            alternativaA: "Muralha",
            alternativaB: "Santo",
            alternativaC: "Paredão",
            alternativaD: "Mágico",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Em qual ano o Palmeiras conquistou a Glória Eterna da sua primeira Copa Libertadores da América?",
            alternativaA: "1951",
            alternativaB: "1965",
            alternativaC: "1999",
            alternativaD: "2016",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Contra qual equipe o Verdão disputou a final dramática da nossa primeira Libertadores?",
            alternativaA: "Boca Juniors",
            alternativaB: "River Plate",
            alternativaC: "Peñarol",
            alternativaD: "Deportivo Cali",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Em qual estádio aconteceu essa final épica da Libertadores de 1999?",
            alternativaA: "Antigo Palestra Italia",
            alternativaB: "Maracanã",
            alternativaC: "Allianz Parque",
            alternativaD: "Pacaembu",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Além de Marcos e Alex, qual outro craque foi fundamental nessa conquista de 1999?",
            alternativaA: "Ademir da Guia",
            alternativaB: "Paulo Nunes",
            alternativaC: "Abel Ferreira",
            alternativaD: "Dudu",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Qual foi o outro meia craque de bola que, junto com Marcos e Paulo Nunes, marcou a nossa conquista da América?",
            alternativaA: "Pelé",
            alternativaB: "Zico",
            alternativaC: "Alex",
            alternativaD: "Ronaldo",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "A inauguração de qual estádio marcou a fase de reconstrução e a 'volta do gigante'?",
            alternativaA: "Arena Corinthians",
            alternativaB: "Morumbi",
            alternativaC: "Vila Belmiro",
            alternativaD: "Allianz Parque",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual título o Palmeiras conquistou em 2015 para mostrar que tinha voltado ao topo?",
            alternativaA: "Copa do Brasil",
            alternativaB: "Campeonato Paulista",
            alternativaC: "Copa Sul-Americana",
            alternativaD: "Recopa",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "No ano seguinte, em 2016, qual grande título nacional o nosso time faturou?",
            alternativaA: "Hepta campeonato brasileiro",
            alternativaB: "Enea campeonato brasileiro",
            alternativaC: "Deca campeonato brasileiro",
            alternativaD: "Octa campeonato brasileiro",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "O que esse título do Brasileirão de 2016 reafirmou sobre o Palmeiras no cenário nacional?",
            alternativaA: "A posição de clube mais rico",
            alternativaB: "O recorde de vitórias seguidas",
            alternativaC: "A nossa posição de maior campeão do Brasil",
            alternativaD: "A invencibilidade no Allianz Parque",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Como a gente conhece a atual era histórica do clube que começou a partir de 2020?",
            alternativaA: "A Nova Era",
            alternativaB: "O Retorno Glorioso",
            alternativaC: "O Império Verde",
            alternativaD: "A Terceira Academia",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual treinador chegou para iniciar a nossa vitoriosa Terceira Academia?",
            alternativaA: "Abel Ferreira",
            alternativaB: "Luiz Felipe Scolari",
            alternativaC: "Vanderlei Luxemburgo",
            alternativaD: "Cuca",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Em quais ediçoes da libertadores o Verdão calou os críticos com o histórico Bicampeonato da Libertadores?",
            alternativaA: "1999 e 2000",
            alternativaB: "2020 e 2021",
            alternativaC: "2015 e 2016",
            alternativaD: "2021 e 2022",
            alternativaCorreta: "alternativaB"
        }
    ];

    // variáveis globais    
    let numeroDaQuestaoAtual = 0
    let pontuacaoFinal = 0
    let tentativaIncorreta = 0
    let certas = 0
    let erradas = 0
    let quantidadeDeQuestoes = listaDeQuestoes.length
    // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

    function onloadEsconder() {
        document.getElementById('pontuacao').style.display = "none"
        document.getElementById('jogo').style.display = "none"
        document.getElementById('pontuacaoEJogo').style.display= "none"
    }

    function iniciarQuiz() {
        document.getElementById('pontuacaoEJogo').style.display= "flex"
        document.querySelector('.main-quiz').style.height = '150dvh'
        document.getElementById('pontuacao').style.display = "flex"
        document.getElementById('jogo').style.display = "flex"
        document.getElementById('btnIniciarQuiz').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
    }

    function submeter() {
        const options = document.getElementsByName("option"); // recupera alternativas no html

        let hasChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                hasChecked = true
                break
            }
        }

        if (!hasChecked) {
            alert("Não há alternativas escolhidas. Escolha uma opção.")
        } else {
            btnSubmeter.disabled = true
            btnProx.disabled = false

            habilitarAlternativas(false)

            checarResposta()
        }
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida

    }

    function avancar() {
        btnProx.disabled = true
        btnSubmeter.disabled = false

        desmarcarRadioButtons()

        if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
            alert("Atenção... a próxima é a ultima questão!")
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else {
            finalizarJogo()
        }
        limparCoresBackgroundOpcoes()
    }

    function tentarNovamente() {
        // atualiza a página
        window.location.reload()
    }

    function checarResposta() {
        const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
        const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

        const options = document.getElementsByName("option"); // recupera alternativas no html

        let alternativaCorreta = null // variável para armazenar a alternativa correta

        options.forEach((option) => {
            if (option.value === respostaQuestaoAtual) {
                console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                alternativaCorreta = option.labels[0].id
            }
        })

        // verifica se resposta assinalada é correta
        options.forEach((option) => {
            if (option.checked === true && option.value === respostaQuestaoAtual) {
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
                document.getElementById("spanCertas").innerHTML = certas
                numeroDaQuestaoAtual++
            } else if (option.checked && option.value !== respostaQuestaoAtual) {
                const wrongLabelId = option.labels[0].id

                document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })
    }

    function limparCoresBackgroundOpcoes() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
            document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
        })
    }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function finalizarJogo() {
        let textoParaMensagemFinal = null
        let classComCoresParaMensagemFinal = null
        const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

        if (porcentagemFinalDeAcertos <= 0.3) {
            textoParaMensagemFinal = "Parece que você não estudou..."
            classComCoresParaMensagemFinal = "text-danger-with-bg"
        }
        else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
            textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
            classComCoresParaMensagemFinal = "text-warning-with-bg"
        }
        else if (porcentagemFinalDeAcertos >= 0.9) {
            textoParaMensagemFinal = "Uau, parabéns!"
            classComCoresParaMensagemFinal = "text-success-with-bg"
        }

        textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos)*100) + "% das questões."


        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
        document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal) 
        document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

        document.getElementById('jogo').classList.add("text-new-gray") 

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = false
    }