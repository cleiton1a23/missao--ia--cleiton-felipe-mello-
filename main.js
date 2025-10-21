const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Como você pode começar a apostar? Saiba como escolher uma boa casa de aposta. ",
        alternativas: [
            {
                texto: " Você pode escolher por casas não legalizadas. ",
                afirmacao: " Você correrá um alto risco de tomar golpe e não conseguir resgatar seu dinheiro. ",
            },
            {
                texto: " Pode optar por sites legais. ",
                afirmacao: " Casas tais como Betano, 7k bet, bet 365… Onde seus ganhos, tem um saque confiável. ",
            }
        ]
    },
    {
        enunciado: " Quando você vai apostar, você opta por quais times?",
        alternativas: [
            {
                texto: " Pelo time com maior nome ou reconhecimento. ",
                afirmacao: " Tome cuidado com isso, pois esses, podem não estar tendo uma boa entrega, tanto no campeonato ou na temporada. ",
            },
            {
                texto: " Através de análise e estatísticas dos times. ",
                afirmacao: "  Pelos times com melhor rendimento e entrega nos jogos, porque possuem a maior probabilidade de acerto. ",
            }
        ]
    },
    {
        enunciado: " Como tentar acertar os palpites sobre os jogos?",
        alternativas: [
            {
                texto: " Através de resultados anteriores.  ",
                afirmacao: " Afirmação 1 - A campanha que o time vem tendo em jogos anteriores, procure olhar sempre os últimos 5 jogos. ",
            },
            {
                texto: " Local do jogo.  ",
                afirmacao: " Afirmação 2 - Tão importante quanto, por se tratar da atmosfera que o estádio vai possuir, se for em no estádio do adversário terá uma grande pressão, se for no estádio de seu time, terá a mesma, mas com um apoio de seus torcedores. ",
            }
        ]
    },
    {
        enunciado: "  Por que apostar?",
        alternativas: [
            {
                texto: "  Para tentar ter uma renda extra. ",
                afirmacao: " Afirmação 1 - Não sendo dependente disso para arrecadar, isso tem um alto risco por conta de ser um jogo de azar.   ",
            },
            {
                texto: " Pela emoção. ",
                afirmacao: " Afirmação 2 - Talvez ganância de ganhar dinheiro fácil, pois, é o que é proposto, mas com alto risco. ",
            }
        ]
    },
    {
        enunciado: " Aposta é um investimento?",
        alternativas: [
            {
                texto: " Não… ",
                afirmacao: "Por não ter um retorno garantido, até por ser um jogo de azar.  ",
            },
            {
                texto: " Talvez ",
                afirmacao: " Afirmação 2 - Talvez você pense assim por parecer fácil, até porque muitas pessoas ficaram rico através disso, mas é um risco muito grande a ser assumido, no entanto, não dependa disso para pagar suas dívidas. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     mostraAlternativas()
    }

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', function () {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


mostraPergunta();