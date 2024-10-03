const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"1. O que é racismo?  Racismo é um sistema de opressão que discrimina indivíduos ou grupos com base em sua raça ou etnia, estabelecendo uma hierarquia racial que favorece alguns grupos enquanto marginaliza outros. Ele se manifesta de várias formas, como atitudes preconceituosas, discriminação estrutural e violência. O racismo pode ser explícito, como agressões verbais, ou sutil, por meio de desigualdades sociais que perpetuam a exclusão de grupos racializados.",
        alternativas: [
            {
                texto: "Discriminação ou preconceito com base na cor da pele ou etnia.",
                afirmacao: "correto!"
            },
            {
                texto: "Apenas uma preferência cultural por grupos específicos.!",
                afirmacao: "incorreto!"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes opções é um exemplo de racismo institucional? Racismo institucional é um tipo de discriminação racial que ocorre dentro de instituições e organizações, seja de forma explícita ou implícita, por meio de políticas, práticas e normas que prejudicam determinados grupos raciais ou étnicos. Diferente do racismo individual, que ocorre em interações pessoais, o racismo institucional está enraizado nas estruturas de poder, resultando em desigualdade sistêmica.",
        alternativas: [
            {
                texto: " Políticas que dificultam o acesso de minorias a empregos e educação.",
                afirmacao: "correto!"
            },
            {
                texto: "Amizades entre pessoas de diferentes etnias.",
                afirmacao: "incorreto!"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto do racismo no mercado de trabalho? O racismo no mercado de trabalho é uma forma de discriminação racial que afeta as oportunidades de emprego, ascensão profissional, salários e condições de trabalho das pessoas racializadas. Essa discriminação pode ocorrer de maneiras diretas ou indiretas e está frequentemente relacionada ao racismo estrutural. Aqui estão alguns exemplos de como o racismo se manifesta no ambiente de trabalho:",
        alternativas: [
            {
                texto: "Afeta as oportunidades de emprego e ascensão profissional de grupos racializados",
                afirmacao: "correto!"
            },
            {
                texto: "Não tem impacto nas oportunidades de emprego",
                afirmacao: "incorreto!"
            }
        ]
    },
    {
        enunciado: "O que caracteriza o racismo estrutural? O racismo estrutural é um tipo de racismo profundamente enraizado nas estruturas e sistemas sociais, econômicos e políticos de uma sociedade. Ele se refere ao conjunto de práticas históricas e contemporâneas que criam e mantêm desigualdades entre diferentes grupos raciais ao longo do tempo. O racismo estrutural não é apenas o resultado de ações individuais, mas sim de uma teia de interações e políticas que sistematicamente favorecem determinados grupos raciais em detrimento de outros.",
        alternativas: [
            {
                texto: " Desigualdades sistemáticas que afetam grupos étnicos ao longo do tempo.",
                afirmacao: "correto!"
            },
            {
                texto: "Preconceitos individuais que ocorrem em situações isoladas.",
                afirmacao: "incorreto!"
            }
        ]
    },
    {
    enunciado: "O racismo, em suas várias formas, é uma ferida histórica e social que continua a impactar profundamente a vida de milhões de pessoas ao redor do mundo. Para erradicá-lo, é preciso entender que não basta ser 'não racista' é necessário ser ativamente antirracista. Isso envolve não apenas a mudança de atitudes individuais, mas a transformação de estruturas sociais inteiras. A luta contra o racismo é um compromisso coletivo para criar uma sociedade mais justa, onde a dignidade e o valor de cada pessoa, independentemente de sua raça, sejam respeitados e promovidos. A reflexão e a ação são essenciais para desfazer os legados de opressão que ainda persistem.",
    alternativa: [
        {
            texto: " Obrigado por participar.",
            afirmacao: "Atenciosamente Andrei :)"
        },
    ]
},
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
