const listaDepalavras = [
    "abacaxi",
    "abelha",
    "academia",
    "agulha",
    "alface",
    "algoritmo",
    "amarelo",
    "amizade",
    "anel",
    "animal",
    "arvore",
    "astronauta",
    "aviao",
    "banana",
    "barco",
    "batata",
    "biblioteca",
    "bicicleta",
    "bola",
    "borboleta",
    "brasil",
    "cachorro",
    "cadeira",
    "caderno",
    "cafe",
    "camiseta",
    "caneta",
    "carro",
    "castelo",
    "celular",
    "cenoura",
    "chocolate",
    "chuva",
    "cidade",
    "computador",
    "coracao",
    "cozinha",
    "crianca",
    "dado",
    "deserto",
    "diamante",
    "dinossauro",
    "elefante",
    "energia",
    "escola",
    "espelho",
    "estrela",
    "familia",
    "fantasma",
    "foguete",
    "floresta",
    "futebol",
    "gato",
    "girafa",
    "guitarra",
    "hamburguer",
    "helicoptero",
    "hospital",
    "igreja",
    "internet",
    "janela",
    "jardim",
    "jornal",
    "lagarto",
    "lampada",
    "laranja",
    "livro",
    "macaco",
    "maquina",
    "mar",
    "mercado",
    "montanha",
    "morango",
    "moto",
    "musica",
    "navio",
    "nuvem",
    "oceano",
    "oculos",
    "onibus",
    "papagaio",
    "parque",
    "passaro",
    "piano",
    "pipoca",
    "planeta",
    "praia",
    "professor",
    "queijo",
    "relogio",
    "sapato",
    "sorvete",
    "telefone",
    "tesoura",
    "tigre",
    "tomate",
    "universo",
    "violao",
    "xadrez",
    "zebra"
];

const lerTeclado = require('readline-sync')

let palavraSorteada = null
let letra = ""
let incognita = []
let letrasErradas = []
let erros = 6
let contador = 0
let vitoria = false
function desenharForca() {
    switch (erros) {
        case 0:
            console.log(`
  +---+
  |   |
      |
      |
      |
      |
=========
`);
            console.log("GAME OVER!");
            break;

        case 1:
            console.log(`
  +---+
  |   |
  O   |
      |
      |
      |
=========
`);
            break;

        case 2:
            console.log(`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`);
            break;

        case 3:
            console.log(`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`);
            break;

        case 4:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========
`);
            break;

        case 5:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========
`);
            break;

        case 6:
            console.log(`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`);


            break;
    }
}

function sortearPalavra() {
    palavraSorteada = listaDepalavras[Math.floor(Math.random() * listaDepalavras.length)]
    console.log(Math.floor(Math.random() * listaDepalavras.length))
    console.log("teste 2", palavraSorteada);

}
function pedirLetra() {
    do {
        letra = lerTeclado.question("Seu palpite: ").toLowerCase();

        if (letra.length !== 1) {
            console.log("Digite apenas uma letra!");
        }
    } while (letra.length !== 1);
    contador++
}
function criarBaseDePlavras() {
    for (let i = 0; i < palavraSorteada.length; i++) {
        incognita.push("_")
    }
}
function exibirTela() {
    console.log("Teste", palavraSorteada);
    console.log(`A palavra tem ${palavraSorteada.length} letras`);
    desenharForca();
    console.log(incognita.join(' '));
    console.log(`Palpites errados: ${letrasErradas}`)
}
function verificarLetraNaPalavra() {
    if (palavraSorteada.includes(letra)) {
        console.log("Parabéns, essa letra esta na palavra.")
        for (let i = 0; i < palavraSorteada.length; i++) {
            if (palavraSorteada[i] == letra) {
                incognita[i] = letra
            }
        }
    } else {
        console.log("Essa letra nao esta na palavra.");
        letrasErradas.push(letra)
        erros--
    }
}

function verificarVitoria() {
    if (incognita.join("") == palavraSorteada) {
        console.log(`Parabéns, voce acertou a palavra em ${contador} tentativas!`)
        vitoria = true
    }
}
function bonecoMorreu() {
    if (erros == 0) {
        console.log("Seu boneco morreu.")
    }
}

function jogar() {
    sortearPalavra();
    criarBaseDePlavras();
    do {
        pedirLetra();

        verificarLetraNaPalavra();

        exibirTela();

        verificarVitoria();

        bonecoMorreu();

    } while (erros > 0 && !vitoria);
}

jogar();