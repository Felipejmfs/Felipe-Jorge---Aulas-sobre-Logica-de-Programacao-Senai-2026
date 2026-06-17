// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.
// → Seu código aqui:



let pedido = {
    nomeCliente: lerTeclado.question("Digite seu nome: "),
    nomePrato: "",
    precoPrato: 0,
    nomeBebida: "",
    precoBebida: 0,
    total: 0
};

let prato = lerTeclado.questionInt("Número do prato: ");
let bebida = lerTeclado.questionInt("Número da bebida: ");

switch (prato) {
    case 1:
        pedido.nomePrato = "Frango Grelhado";
        pedido.precoPrato = 32;
        break;
    case 2:
        pedido.nomePrato = "Filé ao Molho";
        pedido.precoPrato = 45;
        break;
    case 3:
        pedido.nomePrato = "Massa Italiana";
        pedido.precoPrato = 28;
        break;
    case 4:
        pedido.nomePrato = "Salada Caesar";
        pedido.precoPrato = 22;
        break;
    case 5:
        pedido.nomePrato = "Sopa do Dia";
        pedido.precoPrato = 18;
        break;
    default:
        console.log("Item inválido.");
}

switch (bebida) {
    case 1:
        pedido.nomeBebida = "Suco Natural";
        pedido.precoBebida = 9;
        break;
    case 2:
        pedido.nomeBebida = "Refrigerante";
        pedido.precoBebida = 7;
        break;
    case 3:
        pedido.nomeBebida = "Água";
        pedido.precoBebida = 4;
        break;
    case 4:
        pedido.nomeBebida = "Sem bebida";
        pedido.precoBebida = 0;
        break;
    default:
        console.log("Item inválido.");
}

pedido.total = pedido.precoPrato + pedido.precoBebida;

let pix = lerTeclado.keyInYN("Vai pagar no PIX? ");

if (pix) {
    pedido.total *= 0.9;
}

console.table(pedido);

console.log(
    `${pedido.nomeCliente} pediu ${pedido.nomePrato} com ${pedido.nomeBebida}. Total: R$ ${pedido.total.toFixed(2)}`
);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:
let valor = lerTeclado.questionFloat("Digite o valor: ");
let tipo = lerTeclado.questionInt("Tipo de conversão: ");

let conversao = {
    tipo: "",
    valorOriginal: valor,
    unidadeOriginal: "",
    resultado: 0,
    unidadeResultado: ""
};

switch (tipo) {
    case 1:
        conversao.tipo = "Km para Milhas";
        conversao.unidadeOriginal = "Km";
        conversao.resultado = valor * 0.621371;
        conversao.unidadeResultado = "Milhas";
        break;

    case 2:
        conversao.tipo = "Milhas para Km";
        conversao.unidadeOriginal = "Milhas";
        conversao.resultado = valor * 1.60934;
        conversao.unidadeResultado = "Km";
        break;

    case 3:
        conversao.tipo = "Celsius para Fahrenheit";
        conversao.unidadeOriginal = "°C";
        conversao.resultado = (valor * 9/5) + 32;
        conversao.unidadeResultado = "°F";
        break;

    case 4:
        conversao.tipo = "Fahrenheit para Celsius";
        conversao.unidadeOriginal = "°F";
        conversao.resultado = (valor - 32) * 5/9;
        conversao.unidadeResultado = "°C";
        break;

    case 5:
        conversao.tipo = "Kg para Libras";
        conversao.unidadeOriginal = "Kg";
        conversao.resultado = valor * 2.20462;
        conversao.unidadeResultado = "Lb";
        break;

    case 6:
        conversao.tipo = "Libras para Kg";
        conversao.unidadeOriginal = "Lb";
        conversao.resultado = valor / 2.20462;
        conversao.unidadeResultado = "Kg";
        break;

    default:
        console.log("Tipo de conversão inválido.");
}

console.table(conversao);

console.log(
    `${conversao.valorOriginal} ${conversao.unidadeOriginal} = ${conversao.resultado.toFixed(2)} ${conversao.unidadeResultado}`
);




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:
const jogadas = ["pedra", "papel", "tesoura"];
const computador = jogadas[Math.floor(Math.random() * 3)];

let escolha = lerTeclado.questionInt(
    "1-Pedra | 2-Papel | 3-Tesoura: "
);

let jogador = "";

switch (escolha) {
    case 1:
        jogador = "pedra";
        break;
    case 2:
        jogador = "papel";
        break;
    case 3:
        jogador = "tesoura";
        break;
    default:
        console.log("Jogada inválida.");
        process.exit();
}

console.log(`Você: ${jogador} | Computador: ${computador}`);

if (jogador === computador) {
    console.log("Empate!");
}
else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
) {
    console.log("Você venceu!");
}
else {
    console.log("Computador venceu!");
}



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:

let menu = lerTeclado.questionInt(`
1 - Internet
2 - TV
3 - Telefone
4 - Falar com atendente
0 - Encerrar

Opção: `);

switch (menu) {

    case 1:
        let internet = lerTeclado.questionInt(`
1 - Sem conexão
2 - Conexão lenta
3 - Wi-Fi não aparece

Opção: `);

        switch (internet) {
            case 1:
                console.log(`Reinicie o modem e tente novamente.`);
                break;
            case 2:
                console.log(`Aproxime-se do roteador e teste novamente.`);
                break;
            case 3:
                console.log(`Reinicie o roteador para restaurar o Wi-Fi.`);
                break;
            default:
                console.log(`Opção inválida.`);
        }
        break;

    case 2:
        let tv = lerTeclado.questionInt(`
1 - Sem sinal
2 - Imagem ruim
3 - Canais sumidos

Opção: `);

        switch (tv) {
            case 1:
                console.log(`Verifique os cabos da TV.`);
                break;
            case 2:
                console.log(`Confira as conexões e a antena.`);
                break;
            case 3:
                console.log(`Faça uma nova busca de canais.`);
                break;
            default:
                console.log(`Opção inválida.`);
        }
        break;

    case 3:
    case 4:
        console.log(`Por favor, aguarde na linha.`);
        break;

    case 0:
        console.log(`Atendimento encerrado.`);
        break;

    default:
        console.log(`Opção inválida.`);
}


console.log("_______________________________");
