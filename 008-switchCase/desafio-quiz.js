// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
let lerTeclado = require('readline-sync');

let jogador = {
    nome: lerTeclado.question(`Digite seu nome:`),
    pontos: 0,
}
console.log(`Seja bem vindo ${jogador.nome}! Você participará de um quiz sobre jogos. Todas as respostas devem estar em letra maiúscula para serem válidadas.`);

// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
console.log(`
1. Qual é o jogo mais vendido da história?
    A) Grand Theft Auto V
    B) Tetris
    C) Minecraft
    D) Wii Sports`)
let pergunta1C = lerTeclado.question(`Digite a sua resposta da pergunta 1: `).toUpperCase()
switch (pergunta1C) {
    case "C":
        console.log("Correto!")
        jogador.pontos++
        break;
    default:
        console.log("Errado! A resposta certa era a opção C.")
}

console.log(`
2. Em qual jogo aparece o personagem Link?
A) Final Fantasy
B) The Legend of Zelda
C) Dark Souls
D) Skyrim`)
let pergunta2b = lerTeclado.question(`Digite a sua resposta da pergunta 2: `)
switch (pergunta2b) {
    case "B":
        console.log("Correto!")
        jogador.pontos++
        break;
    default:
        console.log("Errado! A resposta certa era a opção B.")
}

console.log(`
3. Qual empresa desenvolveu o jogo Fortnite?
A) Ubisoft
B) Valve
C) Epic Games
D) Activision`)
let pergunta3C = lerTeclado.question(`Digite a sua resposta da pergunta 3: `)
switch (pergunta3C) {
    case "C":
        console.log("Correto!")
        jogador.pontos++
        break;
    default:
        console.log("Errado! A resposta certa era a opção C.")
}

console.log(`
4. Em qual jogo você encontra o personagem Kratos?
A) Assassin’s Creed
B) God of War
C) The Witcher
D) Halo`)
let pergunta4B = lerTeclado.question(`Digite a sua resposta da pergunta 4: `)
switch (pergunta4B) {
    case "B":
        console.log("Correto!")
        jogador.pontos++
        break;
    default:
        console.log("Errado! A resposta certa era a opção B.")
}

console.log(`
5. Qual desses jogos é do gênero battle royale?
A) League of Legends
B) Counter-Strike
C) PUBG
D) FIFA`)
let pergunta5C = lerTeclado.question(`Digite a sua resposta da pergunta 5: `)
switch (pergunta5C) {
    case "C":
        console.log("Correto!")
        jogador.pontos++
        break;
    default:
        console.log("Errado! A resposta certa era a opção C.")
}

//   d) Exiba o total: "Você fez X de 5 pontos."
console.log(`Você fez ${jogador.pontos} de 5 pontos.`);
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
switch (jogador.pontos) {
    case 5:
        console.log("Perfeito! Você zerou o jogo como um verdadeiro pro!");
        break;
    case 4:
        console.log("Muito bem! Faltou pouco pra platinar!");
        break;
    case 3:
        console.log("Bom trabalho! Você passou de fase, mas dá pra melhorar.")
        break;
    case 2:
    case 1:
        console.log("Game over… mas você ainda tem continues!");
        break;
    case 0:
        console.log("VIX! Você nem saiu do tutorial, tente novamente!");
        break;
}
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
let resultado = {
    jogador: jogador.nome,
    pontos: jogador.pontos,
    total: 5,
    aprovado: jogador.pontos >= 3? "Aprovado." : "Reprovado."
}
console.table(resultado)
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:
