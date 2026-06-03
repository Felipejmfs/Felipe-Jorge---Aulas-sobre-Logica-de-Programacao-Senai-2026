// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
const lerTeclado = require('readline-sync')
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:

function saudacao() {
    console.log("Olá!");
    console.log("Bem-vindo(a) ao curso de JavaScript.");
    console.log("Bons estudos!");
}

saudacao()
saudacao()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:

function linha() {
    console.log("----------------------------------------");
}
function titulo() {
    console.log("         RELATÓRIO MENSAL              ");
}
function cabecalho() {
    linha()
    titulo()
    linha()
}
cabecalho()

console.log("_______________________________");

let nome = null
let idade = null
let cidade = null
let usuarios = []


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
function meusDados() {
    let usuario = {
        nome: lerTeclado.question(`Digite seu nome: `),
        idade: lerTeclado.questionInt(`Digite sua idade: `),
        cidade: lerTeclado.question(`Digite seu cidade: `)
    }
    usuarios.push(usuario)
}
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
function exibirDados() {
    console.log(`Nome: ${nome}`);
    console.log(`idade: ${idade}`);
    console.log(`cidade: ${nome}`);
}
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
for (let i = 0; i < 2; i++) {
    meusDados()
}
// d) Exiba os dados dos 2 usuários.
console.log(usuarios);


//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:

function sortear() {
    let n = (Math.floor(Math.random() * 100) + 1)
    console.log(n);
}
for (i = 1; i <= 5; i++) {
    sortear()
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:
function tabuadaDoCinco() {
    for (let i = 0; i < 11; i++) {
        console.log("5 x", i, "=", 5 * i);
    }
}
function tabuadaDoSete() {
    for (let i = 0; i < 11; i++) {
        console.log("7 x", i, "=", 7 * i);
    }
}

tabuadaDoCinco()
tabuadaDoSete()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:
function converterTemperatura() {
    let temperatura = lerTeclado.questionInt(`Digite a temperatura em °C para converter em °F: `)
    let temperaturaEmFahrenheit = (temperatura * 1.8) + 32
    console.log(`${temperatura}°C equivale a ${temperaturaEmFahrenheit}°F`);
}

converterTemperatura()
converterTemperatura()
converterTemperatura()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:
function listarFilmes() {
    for (let i = 0; i < filmes.length; i++) {
        console.log(`${i + 1} - ${filmes[i]}`);

    }
}
listarFilmes()
listarFilmes()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:

let nome = null
function limparTela() {
    for (let i = 1; i <= 30; i++) {
        console.log("");
    }
}
function banner() {
    console.log("-----------")
    console.log("Banner top")
    console.log("-----------")
}
function pedirNome() {
    nome = lerTeclado.question("Digite o seu nome: ")
    console.log(`Olá, ${nome}!`);

}
function rodape() {
    console.log("Sistema desenvolvido por Felipe.");
}
function programaPrincipal() {
    limparTela()
    banner()
    pedirNome()
    rodape()
}
programaPrincipal()
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:
let opcao = null
function pedirNumero() {
    let numeroA = lerTeclado.questionInt(`Digite o primeiro numero: `)
    let numerob = lerTeclado.questionInt(`Digite o segundo numero: `)
}
function opcaoSomar() {
    pedirNumero()
    console.log(`${numeroA} + ${numerob} = ${numeroA + numerob}`);
}
function opcaoSubtrair() {
    pedirNumero()
    console.log(`${numeroA} - ${numerob} = ${numeroA - numerob}`);
}
function opcaoMultiplicar() {
    pedirNumero()
    console.log(`${numeroA} * ${numerob} = ${numeroA * numerob}`);
}
function opcaoDividir() {
    pedirNumero()
    if (numerob == 0) {
        console.log("Divisão por 0 é inválida.")
        break
    } else console.log(`${numeroA} / ${numerob} = ${numeroA / numerob}`)
}
function menu() {
    console.log("1 para somar");
    console.log("2 para subtrair");
    console.log("3 para multiplicar");
    console.log("4 para dividir");
    console.log("0 para sair");
}

do {
    menu()
    opcao = lerTeclado.questionInt("Digite a operacao que quer: ")
    switch (opcao) {
        case 1:
            opcaoSomar()
            break;
        case 2:
            opcaoSubtrair()
            break;
        case 3:
            opcaoMultiplicar()
            break;
        case 4:
            opcaoDividir()
            break;
        case 0:
            console.log("Saindo...");
            break
        default:
            console.log("Opcao invalida, tente novamente.");
            break;
    }
} while (opcao !== 0)

console.log("_______________________________");
