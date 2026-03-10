// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:

const lerTeclado = require('readline-sync')

// const nomeUsuario = lerTeclado.question("Digite seu nome: ")
// const idadeUsuario = lerTeclado.questionInt("Digite sua idade: ")
// const profissaoUsuario = lerTeclado.question("Digite sua profissão: ")
// const cidadeUsuario = lerTeclado.question("Digite sua cidade: ")
// const gostaJSUsuario = lerTeclado.keyInYN("Gosta de JS?: ")
// const listaComida = {
//     comidafav: lerTeclado.question("Digite sua comida favorita: "),
//     comidafav2: lerTeclado.question("Digite sua segunda comida favorita: "),
//     comidafav3: lerTeclado.question("Digite sua terceira comida favorita: ")
// }
// const listaDePessoasQueMora= {
//     nome: lerTeclado.question("Digite o nome de quem mora contigo: "),
//     idade: lerTeclado.question("Digite a idade de quem mora contigo: ")
// }

// let cadastro = {
//     nome: nomeUsuario,
//     idade: idadeUsuario,
//     profissao: profissaoUsuario,
//     cidade: cidadeUsuario,
//     gosta: gostaJSUsuario,
//     listaAlimentoFav: listaComida,
//     moraJunto: listaDePessoasQueMora
// }

// console.table(cadastro)
// console.log(`Nome: ${nomeUsuario}. Idade: ${idadeUsuario}. Profissão: ${profissaoUsuario}. Cidade: ${cidadeUsuario}. Gosta de JS: ${gostaJSUsuario}. Lista de pessoas que mora: ${listaDePessoasQueMora}`)


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 1º usuário.

// → Seu código aqui:


// const nomeUsuario = lerTeclado.question("Digite seu nome: ")
// const idadeUsuario = lerTeclado.questionInt("Digite sua idade: ")
// const cidadeUsuario = lerTeclado.question("Digite a sua cidade: ")

// let usuario = {
//     nome: nomeUsuario,
//     idade: idadeUsuario,
//     cidade: cidadeUsuario
// }

// const nomeUsuario2 = lerTeclado.question("Digite seu nome: ")
// const idadeUsuario2 = lerTeclado.questionInt("Digite sua idade: ")
// const cidadeUsuario2 = lerTeclado.question("Digite a sua cidade: ")

// let usuario2 = {
//     nome: nomeUsuario2,
//     idade: idadeUsuario2,
//     cidade: cidadeUsuario2
// }

// let amigos = [usuario, usuario2]
// console.table(amigos)
// console.log(amigos[1].nome, amigos[1].idade)
// console.log(amigos[0].cidade)





// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:

// console.info("Você vai montar um pedido")

// let entradaMenu = (`
// ===========================
// |       MENU ENTRADA      |
// ===========================
// 1 - Batata frita / 600g / R$30
// 2 - Espetinho / 1und / R$15
// 3 - Mandioca frita / 1kg / 40R$
// 4 - Pão / 1und / 1R$
// ===========================
// | Digite a Opção desejada |
// ===========================`)

// console.log(entradaMenu)
// const pedidoEntrada = lerTeclado.question("Escolha uma entrada: ")

// let principalMenu = (`
// ===========================
// |    PRATOS PRINCIPAIS    |
// ===========================
// 1 - Parmegiana / Pf / R$30
// 2 - Strogonoff / Pf / R$30
// 3 - Feijão tropeiro / Pf / 40R$
// 4 - Churrasco / Pf / 40R$
// ===========================
// | Digite a Opção desejada |
// ===========================`)
// console.log(principalMenu)
// let pedidoPrincipal = lerTeclado.question("Escolha um prato principal: ")

// let sobremesasMenu = (`
// =========================2
// |        SOBREMESAS      2
// =========================2
// 1 - Bolo / Kg / R$30
// 2 - Torta de bolacha / Kg2
// 3 - Bala / Und / 40R$
// 4 - Chocolate / Kg / 40R2
// ===========================
// | Digite a Opção desejada |
// ===========================`)
// console.log(sobremesasMenu)
// let pedidoSobremasa = lerTeclado.question("Escolha uma sobremesa: ")

// let bebidasMenu = (`
// ===========================
// |         Bebidas         |
// ===========================
// 1 - Água / und / R$30
// 2 - Suco / und / R$30
// 3 - Refri / Und / 40R$
// 4 - Cerveja / Und / 40R$
// ===========================
// | Digite a Opção desejada |
// ===========================`)
// console.log(bebidasMenu)
// let pedidoBebida = lerTeclado.question("Escolha uma bebida: ")
// let pedidoBebida2 = lerTeclado.question("Escolha mais uma bebida: ")
// let pedido = {
//     entrada: pedidoEntrada,
//     pratoPrincipal: pedidoPrincipal,
//     sobremesas: pedidoSobremasa,
//     listaBebidas: [pedidoBebida, pedidoBebida2]
// }
// console.table(pedido);
// console.log(`Seu pedido: Entrada: ${pedidoEntrada}, Prato Principal: ${pedidoPrincipal}, Sobremesa: ${pedidoSobremasa}, Bebida 1: ${pedidoBebida}, Bebida 2: ${pedidoBebida2}. Bom apetite!`)


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:

// let perfil = {
//     apelido: lerTeclado.question("Digite o seu apelido: "),
//     jogoFavorito: lerTeclado.question("Digite o seu jogo favorito: "),
//     horasTotaisJogadas: lerTeclado.questionInt("Digite suas horas totais jogadas: "),
//     jogaEmTime: lerTeclado.keyInYN("Você joga em time? ")
// }
// console.table(perfil)

// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")




// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:

const pessoa = {
    nome: lerTeclado.question("Digite seu nome: "),
    cidadeFav: lerTeclado.question("Digite sua cidade favorita: ")
}
const pessoa2 = {
    nome: lerTeclado.question("Digite seu nome: "),
    cidadeFav: lerTeclado.question("Digite sua cidade favorita: ")
}
const pessoa3 = {
    nome: lerTeclado.question("Digite seu nome: "),
    cidadeFav: lerTeclado.question("Digite sua cidade favorita: ")
}
let viajantes = [pessoa, pessoa2, pessoa3]

console.table(viajantes)
console.info(`Há ${viajantes.length} viajantes nessa viagem`)
console.log(viajantes[1].cidadeFav)
console.log(viajantes[0].nome)