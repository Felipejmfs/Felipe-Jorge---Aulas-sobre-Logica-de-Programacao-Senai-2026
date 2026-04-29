// ============================================================
//   JOGO: Adivinhe o Número
// ============================================================
//
// O jogo tem DOIS modos, ambos devem ser implementados:
//
//   MODO 1 – Computador pensa, você adivinha
//     O computador sorteia um número de 1 a 100.
//     O jogador tem até 7 tentativas para descobrir qual é.
//     A cada erro, o programa diz se o palpite foi alto ou baixo.
//
//   MODO 2 – Você pensa, computador adivinha
//     O jogador pensa em um número de 1 a 100 (não digita).
//     O computador tenta adivinhar usando busca binária:
//        sempre chuta o meio do intervalo restante.
//     O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo
//     O computador deve acertar em no máximo 7 tentativas.
//
// Para números aleatórios, utilize a função Math.random() do Javascript
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CONFIGURAÇÕES DO JOGO (não altere)
// ============================================================

const MAX_TENTATIVAS = 7;
const NUM_MIN = 1;
const NUM_MAX = 100;

// ============================================================
// MENU PRINCIPAL
// ============================================================

console.log("|==============================|");
console.log("|     ADIVINHE O NÚMERO        |");
console.log("|==============================|");
console.log("|  1 – Eu adivinho o número    |");
console.log("|  2 – Computador adivinha     |");
console.log("|  3 – Sair                    |");
console.log("|==============================|");

const modo = lerTeclado.questionInt("\nEscolha o modo: ");

console.log("_______________________________");


// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
//
// Instruções para implementação do Modo 1:
//
// PASSO 1 – Gere o número secreto do computador Math.random();
// PASSO 2 – Passe as instruções do jogo.
// PASSO 3 – Use um for para as tentativas.
//  - Se acertou, exiba: "Parabéns! Você acertou em <i> tentativa(s)!", e encerre o jogo.
//  - Se o palpite for maior que o secreto, exiba: "Muito alto! Tente um número menor."
//  - Se o palpite for menor que o secreto, exiba: "Muito baixo! Tente um número maior."
//  - Ao final de cada tentativa errada, exiba quantas tentativas restam.
//  - Se o jogador NÃO acertou, exiba: "Fim de jogo! O número era <secreto>."
// PASSO 4 – Exiba um resumo:
//           "Número secreto: <secreto>"
//           "Tentativas usadas: <i>"
//           "Resultado: Vitória" ou "Resultado: Derrota"

// → Seu código do MODO 1 aqui:





// ============================================================
// MODO 2 – Jogador pensa, computador adivinha
// ============================================================
//
// Instruções para implementação do Modo 2:
//
// PASSO 1 – Instrua o jogador a digitar um número inteiro entre 1 e 100;
// PASSO 2 – Inicialize o intervalo de busca:
//           let min = NUM_MIN;
//           let max = NUM_MAX;
// PASSO 3 – Use um for para as tentativas.
//   a) Calcule o palpite do computador: meio do intervalo
//   b) Exiba: "Tentativa <i>: Meu palpite é <palpite>!"
//   c) Pergunte ao jogador o resultado com questionInt():
//        "1 – Acertei | 2 – Muito alto | 3 – Muito baixo"
//   d) De acordo com a resposta, busque pelo meio do novo intervalo.
// PASSO 4 – Se o computador acertar, exiba uma mensagem de vitória, exiba quantas tentativas o computador usou e finalize o jogo.
// PASSO 5 – Se o computador não acertar, exiba uma mensagem de derrota e o número que o jogador estava pensando.

// Implemente seu código abaixo:


switch (modo) {
    case 1:
        let numeroPc = (Math.floor(Math.random() * 100) + 1).toFixed(0)
        let tentativasUsadas = 0
        let resultado = "Derrota"
        console.log(`Computador pensa, você adivinha
            O computador sorteia um número de 1 a 100.
            O jogador tem até 7 tentativas para descobrir qual é.
            A cada erro, o programa diz se o palpite foi alto ou baixo.`);
            
        for (let tentativas = 7; tentativas > 0; tentativas--){
            let palpite = lerTeclado.question(`Digite o seu palpite: `)
            if (tentativas == 0 && palpite != numeroPc) {
                console.log(`Fim de jogo! O número era ${numeroPc}.`)
                process.exit()
            }
            if (palpite != numeroPc){
                if (palpite > numeroPc) {
                    console.log(`Muito alto! Tente novamente. Restam ${tentativas - 1} tentativas.`)
                }
                else console.log(`Muito baixo! Tente novamente. Restam ${tentativas - 1} tentativas.`)
            } else {
                console.log(`Parabéns! Você acertou em ${tentativasUsadas + 1} tentativa(s)!`)
                resultado = "Vitória"
            }
            if (palpite == numeroPc){
                process.exit()
            }
            tentativasUsadas++
        }
        console.log(`
        Número secreto: ${numeroPc}
        Tentativas usadas: ${tentativasUsadas}
        Resultado: ${resultado}
        `);
        break;
        case 2:
            let tentativasPc = 0
            let resultadoPc = "Derrota"
            let numeroJogador = lerTeclado.questionInt(`Digite um número de 1 a 100: `)
            let palpitePc = NUM_MAX / 2
            for (let i = 1; i < 8; i++){
                console.log(`Tentativa ${i}: Meu palpite é ${Math.ceil(palpitePc)}`);
                let respostaJogador = lerTeclado.questionInt("1 . Acertei | 2 . Muito alto | 3 . Muito baixo: ")
                switch (respostaJogador) {
                    case 1:
                        console.log(`O computador acertou em ${i} tentativas.`);
                        process.exit()
                        break;
                    case 2:
                        palpitePc = Math.floor((palpitePc + NUM_MIN) / 2)
                        break;
                    case 3:
                        palpitePc = Math.floor((palpitePc + NUM_MAX) / 2)
                        
                        break;
                }
            }
        break;
        case 3:
        console.log("Encerrando.");
}


















