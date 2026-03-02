// Data aula 02/03/2026
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
const nome = "Felipe"
let idade = 16
let hobbyFavorto = "montar cubo mágico"
console.log("Execício 1")

console.log(`Me chamo ${nome}, tenho ${idade} anos e gosto de ${hobbyFavorto}.`)

console.log(`

===========================
`)
// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade = "Jaraguá do Sul"
let temperatura = 21
console.log("Execício 2")

console.log(`Hoje em ${cidade} está fazendo ${temperatura}°C, perfeito para ficar em casa jogando vídeo game.`);

console.log(`

===========================
`)
// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let variavelString = "texto"
let variavelNumber = 17
let variavelBoolean = true
let variavelBoolean2 = false
let variavelUndefined
let variavelNull= null

console.log("Execício 3")

console.log(`Variáveis que contém ${variavelString} são primitivas do tipo ${typeof variavelString}`)
console.log(`Variáveis que contém números como ${variavelNumber} são primitivas do tipo ${typeof variavelNumber}`)
console.log(`Variáveis que contém a palavra ${variavelBoolean} são primitivas do tipo ${typeof variavelBoolean}`)
console.log(`Variáveis que contém ${variavelBoolean2} são primitivas do tipo ${typeof variavelBoolean2}`)
console.log(`Variáveis que resultam em ${variavelUndefined}, não são definidas e portanto são primitivas do tipo ${typeof variavelUndefined}`)
console.log(`Variáveis que contém ${variavelNull}, ou seja, são definidas como nulas, são primitivas do tipo ${typeof variavelNull}`)
console.log(`

===========================
`)
// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "Fulano De Tal"
const idadePersonagem = 34
let cidadePersonagem = "Fernando de Noronha"
let missãoPersonagem = "vender 20 pulseiras na praia"

console.log("Execício 4")

console.log(`O ${personagem} foi para uma praia em ${cidadePersonagem}, e no auge dos seus
 ${idadePersonagem} anos, decidiu ${missãoPersonagem}. Ficou 6 horas em baixo do sol quente,
 depois de muito suor conseguiu, e lucrou 40 reais.`);
 console.log(`

 ===========================
 `)
// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

console.log("Execício 5")

const nomee = "Felipe"
let objetivo = "média de resuloção abaixo de 10 segundos no cubo mágico"


console.log(`${nomee}, vai ser difícil alcançar uma ${objetivo}, porém com foco, dedicação e esforço,
tudo é possível, até mesmo as coisas que não parecem ser.`);
console.log(`

===========================
`)
// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log("Execício 6")

let menuAula = (`
===========================
      SISTEMA USUÁRIO      
===========================
1 - Ver perfil
2 - Editar perfil
3 - Configurações
4 - Notificações
5 - Relatórios
6 - Ajuda
7 - Sobre o sistema
0 - Sair
===========================
Digite a Opção desejada
===========================`)

console.log(menuAula);



