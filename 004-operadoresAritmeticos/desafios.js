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
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================
const lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
let produto = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}

let produto2 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}

let produto3 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
let carrinho = [produto, produto2, produto3]
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
valorTotal = produto.preco + produto2.preco + produto3.preco
console.log(valorTotal)
//    - valorMedio dos produtos
valorMedio = (valorTotal / carrinho.length).toFixed(2)
//
// e) Exiba o carrinho com console.table().
console.table(carrinho)
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"

console.log(`O carrinho possui ${carrinho.length} produtos. Valor total: ${valorTotal} Valor médio dos produtos: ${valorMedio}
`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
let despesas = {
    aluguel: lerTeclado.questionFloat(`Digite o valor do aluguel: `),
    internet: lerTeclado.questionFloat(`Digite o valor da net: `),
    energia: lerTeclado.questionFloat(`Digite o valor da energia: `),
    alimentacao: lerTeclado.questionFloat(`Digite o valor da alimentacao: `)
    
}
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
let listaDespesas = [despesas.aluguel, despesas.internet, despesas.energia, despesas.alimentacao]
// d) Calcule:
//    - total de despesas

let totalDepesas = listaDespesas.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0)
console.log(totalDepesas)
//    - média das despesas
let media = totalDepesas / listaDespesas.length
//    - quanto sobra se o salário for 5000.
let valorRestante = 5000 - totalDepesas
// e) Exiba:
//
// "Total de despesas: X"
console.log(`Total de despesas: ${totalDepesas}`)
// "Média de despesas: X"
console.log(`Total de despesas: ${media}`)
// "Dinheiro restante: X"
console.log(`Total de despesas: ${valorRestante}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Estatísticas de jogador
// ------------------------------------------------------------
// a) Peça ao usuário:
//    nome do jogador
//    partidas jogadas
//    gols
//    assistências
//
// b) Crie um objeto "jogador".
//
let jogador = {
    nomeJogador: lerTeclado.question(`Digite o nome do jogador: `),
    partidasJogadas: lerTeclado.questionInt(`Digite quantas partidas o jogador jogou: `),
    gols: lerTeclado.questionInt(`Digite o número de gols: `),
    assistencias: lerTeclado.questionInt(`Digite o número de assistências: `)
    
}
// c) Crie um array "estatisticas" contendo:
//    [gols, assistencias]
let estatisticas = [jogador.gols, jogador.assistencias]
//
// d) Calcule:
//    - participacoesEmGol = gols + assistencias
let participacoesEmGol = jogador.gols + jogador.assistencias
//    - mediaPorPartida = participacoesEmGol / partidas
//
let mediaPorPartida = participacoesEmGol / jogador.partidasJogadas
// e) Exiba:
//
// "Jogador: X"
console.log(`Jogador: ${jogador.nomeJogador}`)
// "Participações em gol: X"
console.log(`Participações: ${participacoesEmGol}`)
// "Média por partida: X"
console.log(`Média por partida ${jogador.nomeJogador}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Pedido de mercado
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 4 produtos:
//    nome e preço.
let produto = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}

let produto2 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}

let produto3 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}

let produto4 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}


//
// b) Crie um objeto "mercado" contendo:
//    - produtos (array)
//
let mercado = [produto, produto2, produto3, produto4]
// c) Calcule:
//    - valor total da compra
let valorTotalCompra = produto.preco + produto2.preco + produto3.preco + produto4.preco 
//    - valor com desconto de 10%
let valorDesconto = valorTotalCompra * 0.10
//
// Fórmula:
// desconto = total * 0.10
// valorFinal = total - desconto
let valorFinalCompra = valorTotalCompra - valorDesconto
//
// d) Exiba:
//
// "Total da compra: X"
// "Desconto: X"
// "Valor final: X"
console.log(`Total da compra: ${valorTotalCompra}
Desconto: ${valorDesconto}
Valor final: ${valorFinalCompra
}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário 4 notas.
//
// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)
//
// c) Calcule:
//    média das notas
//
// d) Calcule também:
//    pontosFaltantesPara10
//
// Fórmula:
// pontosFaltantes = 10 - media
//
// e) Exiba:
//
// "Notas: X"
// "Média: X"
// "Faltam X pontos para média 10."

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------
// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida
//
// b) Crie um objeto "pedido".
//
// c) Crie um array "itens".
//
// d) Calcule:
//    subtotal
//
// e) Calcule taxa de serviço de 10%
//
// f) Calcule valor total.
//
// g) Exiba:
//
// "Subtotal: X"
// "Taxa de serviço: X"
// "Total a pagar: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------
// a) Peça 5 números ao usuário.
//
// b) Crie um objeto "analise".
//
// c) Crie um array "numeros".
//
// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)
//
// e) Exiba:
//
// "Soma: X"
// "Média: X"
// "Produto: X"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------
// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis
//
// b) Crie um objeto "financeiro".
//
// c) Crie arrays:
//    receitas
//    despesas
//
// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal
//
// Fórmulas:
// rendaTotal = salario + rendaExtra
// gastoTotal = gastosFixos + gastosVariaveis
// saldoFinal = rendaTotal - gastoTotal
//
// e) Exiba:
//
// "Renda total: X"
// "Gastos totais: X"
// "Saldo final: X"

// → Seu código aqui:


console.log("_______________________________");