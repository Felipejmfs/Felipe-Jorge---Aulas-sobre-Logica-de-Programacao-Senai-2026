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


/// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------

// a) Peça ao usuário 4 notas.

let nota1 = lerTeclado.questionFloat("Digite a primeira nota: ");
let nota2 = lerTeclado.questionFloat("Digite a segunda nota: ");
let nota3 = lerTeclado.questionFloat("Digite a terceira nota: ");
let nota4 = lerTeclado.questionFloat("Digite a quarta nota: ");

// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)

let boletim = {
    notas: [nota1, nota2, nota3, nota4]
};

// c) Calcule:
//    média das notas

let media = (nota1 + nota2 + nota3 + nota4) / 4;

// d) Calcule também:
//    pontosFaltantesPara10

let pontosFaltantesPara10 = 10 - media;

// e) Exiba:

console.log(`Notas: ${boletim.notas}
Média: ${media}
Faltam ${pontosFaltantesPara10} pontos para média 10.`);

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------

// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida

let entrada = lerTeclado.questionFloat("Preço da entrada: ");
let pratoPrincipal = lerTeclado.questionFloat("Preço do prato principal: ");
let sobremesa = lerTeclado.questionFloat("Preço da sobremesa: ");
let bebida = lerTeclado.questionFloat("Preço da bebida: ");

// b) Crie um objeto "pedido".

let pedido = {
    entrada: entrada,
    pratoPrincipal: pratoPrincipal,
    sobremesa: sobremesa,
    bebida: bebida
};

// c) Crie um array "itens".

let itens = [entrada, pratoPrincipal, sobremesa, bebida];

// d) Calcule:
//    subtotal

let subtotal = entrada + pratoPrincipal + sobremesa + bebida;

// e) Calcule taxa de serviço de 10%

let taxaServico = subtotal * 0.10;

// f) Calcule valor total.

let total = subtotal + taxaServico;

// g) Exiba:

console.log(`Subtotal: ${subtotal}
Taxa de serviço: ${taxaServico}
Total a pagar: ${total}`);

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------

// a) Peça 5 números ao usuário.

let numero1 = lerTeclado.questionFloat("Digite o primeiro número: ");
let numero2 = lerTeclado.questionFloat("Digite o segundo número: ");
let numero3 = lerTeclado.questionFloat("Digite o terceiro número: ");
let numero4 = lerTeclado.questionFloat("Digite o quarto número: ");
let numero5 = lerTeclado.questionFloat("Digite o quinto número: ");

// b) Crie um objeto "analise".

let analise = {
    numeros: [numero1, numero2, numero3, numero4, numero5]
};

// c) Crie um array "numeros".

let numeros = [numero1, numero2, numero3, numero4, numero5];

// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)

let soma = numero1 + numero2 + numero3 + numero4 + numero5;
let media = soma / 5;
let produto = numero1 * numero2 * numero3 * numero4 * numero5;

// e) Exiba:

console.log(`Soma: ${soma}
Média: ${media}
Produto: ${produto}`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------

// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis

let salario = lerTeclado.questionFloat("Digite o salário: ");
let rendaExtra = lerTeclado.questionFloat("Digite a renda extra: ");
let gastosFixos = lerTeclado.questionFloat("Digite os gastos fixos: ");
let gastosVariaveis = lerTeclado.questionFloat("Digite os gastos variáveis: ");

// b) Crie um objeto "financeiro".

let financeiro = {
    receitas: [salario, rendaExtra],
    despesas: [gastosFixos, gastosVariaveis]
};

// c) Crie arrays:
//    receitas
//    despesas

let receitas = [salario, rendaExtra];
let despesas = [gastosFixos, gastosVariaveis];

// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal

let rendaTotal = salario + rendaExtra;
let gastoTotal = gastosFixos + gastosVariaveis;
let saldoFinal = rendaTotal - gastoTotal;

// e) Exiba:

console.log(`Renda total: ${rendaTotal}
Gastos totais: ${gastoTotal}
Saldo final: ${saldoFinal}`);

console.log("_______________________________");