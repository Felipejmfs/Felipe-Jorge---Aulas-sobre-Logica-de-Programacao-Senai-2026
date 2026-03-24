// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

const lerTeclado = require('readline-sync')
// ------------------------------------------------------------
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
let pessoa = {
    nome: lerTeclado.question(`Digite o nome da pessoa: `),
    idade: lerTeclado.questionInt(`Digite a idade: `)
}
let pessoa2 = {
    nome: lerTeclado.question(`Digite o nome da pessoa: `),
    idade: lerTeclado.questionInt(`Digite a idade: `)
}
let pessoa3 = {
    nome: lerTeclado.question(`Digite o nome da pessoa: `),
    idade: lerTeclado.questionInt(`Digite a idade: `)
}
// b) Armazene os objetos em um array "pessoas".
let pessoas = [pessoa, pessoa2, pessoa3]
// c) Exiba a array com console.table().
console.table(pessoas)
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
let idadeMaior = pessoas[0].idade > pessoas[1].idade
//    - pessoa2 é mais nova que pessoa3?
let idadeMenor23 = pessoas[1].idade < pessoas[2].idade
//    - pessoa1 e pessoa3 têm a mesma idade?
let idadeIgual13 = pessoas[0].idade === pessoas[2].idade
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
let idadeMaiorIdade1 = pessoas[0].idade > 18
let idadeMaiorIdade2 = pessoas[1].idade > 18
let idadeMaiorIdade3 = pessoas[2].idade > 18
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.
console.log(`Idade da ${pessoas[0].nome} é ${idadeMaior ? "maior que a da" : "menor que a da"} ${pessoas[1].nome}`)
console.log(`Idade da ${pessoas[1].nome} é ${idadeMenor23 ? "menor que a da" : "maior que a da"} ${pessoas[2].nome}`)
console.log(`Idade da ${pessoas[0].nome} é ${idadeIgual13 ? "igual que a da" : "diferente que a da"} ${pessoas[1].nome}`)
console.log(`Idade da ${pessoas[0].nome} é ${pessoas[0].idade} e ela é ${idadeMaiorIdade1 ? "Maior de Idade" : "Menor de idade"}`)
console.log(`Idade da ${pessoas[1].nome} é ${pessoas[1].idade} e ela é ${idadeMaiorIdade2 ? "Maior de Idade" : "Menor de idade"}`)
console.log(`Idade da ${pessoas[2].nome} é ${pessoas[2].idade} e ela é ${idadeMaiorIdade3 ? "Maior de Idade" : "Menor de idade"}`)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
let produto = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}
let produto2 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `)
}
let produtos = [produto, produto2]
// b) Exiba os dois objetos com console.table().
console.table(produtos)
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
let diferença = Math.abs(produtos[0].preco - produtos[1].preco)
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
let produto1Maior = produtos[0].preco > produtos[1].preco
//    - os dois têm o mesmo preço?
let produtoIgual = produtos[0].preco === produtos[1].preco
//    - o produto mais barato custa menos de R$ 50?
let produto1Menor = `${((produto1Maior ? produtos[1].preco : produtos[0].preco)<50)? "Sim" : "Não"}`
//    - o produto mais caro custa mais de R$ 200?
let produtoMaior = `${((produto1Maior ? produtos[0].preco : produtos[1].preco)>200)? "Sim" : "Não"}`
// e) Exiba cada resultado identificando os produtos pelo nome.
console.log(`Preço do ${produtos[0].nome} é ${produto1Maior ? "maior que a da" : "menor que a da"} ${produtos[1].nome}`)
console.log(`Preço do ${produtos[0].nome} é ${produtoIgual ? "igual que a da" : "diferente que a da"} ${produtos[1].nome}`)
console.log(`O produto mais barato é ${(produto1Menor ? produtos[0].nome : produtos[1].nome)} seu preço é menor que 50? ${produto1Menor}`)
console.log(`O produto mais caro é ${(produtoMaior ? produtos[1].nome : produtos[0].nome)} seu preço é maior que 200? ${produtoMaior}`)



// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// → Seu código aqui:
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
let aluno = {
    nome: lerTeclado.question(`Digite seu nome: `),
    nota: lerTeclado.questionFloat(`digite a primeira nota: `),
    nota2: lerTeclado.questionFloat(`digite a segunda nota: `),
    nota3: lerTeclado.questionFloat(`digite a terceira nota: `),
    nota4: lerTeclado.questionFloat(`digite a quarta nota: `),
}
// b) Calcule a média das 4 notas (use toFixed(2)).
let media = ((aluno.nota + aluno.nota2 + aluno.nota3 + aluno.nota4)/4).toFixed(2)
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
let boletim = {
    nome: aluno.nome,
    notas: [aluno.nota, aluno.nota2, aluno.nota3, aluno.nota4],
    media: media
}
// d) Exiba o objeto com console.table().
console.table(boletim)
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
let aprovado = media >= 6 ? "Aprovado" : "Não está aprovado"
console.log(aprovado)

//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
let recuperacao = media >= 4 && media < 6 ? "Recuperação" : "Reprovado"
console.log(recuperacao)
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
let NotaMaior9 = (Element) => Element > 9
console.log(boletim.notas.some(NotaMaior9))
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)
console.log(`A maior nota é maior que a menor nota em mais de 3 pontos? ${(Math.max(boletim.notas) - Math.min(boletim.notas)) > 3? "Sim" : "Não"}`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
produtoo = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `),
    qtdEstoque: lerTeclado.questionInt(`Digite a quantidade em estoque: `)
}
produtoo2 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `),
    qtdEstoque: lerTeclado.questionInt(`Digite a quantidade em estoque: `)
}
produtoo3 = {
    nome: lerTeclado.question(`Digite o nome do produto: `),
    preco: lerTeclado.questionFloat(`Digite o preço do produto: `),
    qtdEstoque: lerTeclado.questionInt(`Digite a quantidade em estoque: `)
}
// b) Crie um array "estoque" e armazene os 3 produtos.
let estoque = [produtoo, produtoo2, produtoo3]
// c) Exiba o array com console.table().
console.table(estoque)
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
let disponível = `${estoque[0] > 0}`
console.log(`O produto ${estoque[0].nome} tem estoque disponível?: ${disponível? "Sim" : "não"}`)

let disponível2 = `${estoque[1] > 0}`
console.log(`O produto ${estoque[1].nome} tem estoque disponível?: ${disponível2? "Sim" : "não"}`)

let disponível3 = `${estoque[2] > 0}`
console.log(`O produto ${estoque[2].nome} tem estoque disponível?: ${disponível3? "Sim" : "não"}`)

//    - O produto está com estoque baixo (quantidade <= 5)?
let baixo = `${estoque[0] <= 5}`
console.log(`O produto ${estoque[0].nome} tem estoque baixo?: ${baixo? "Sim" : "não"}`)

let baixo2 = `${estoque[1] <= 5}`
console.log(`O produto ${estoque[1].nome} tem estoque baixo?: ${baixo2? "Sim" : "não"}`)

let baixo3 = `${estoque[2] <= 5}`
console.log(`O produto ${estoque[2].nome} tem estoque baixo?: ${baixo3? "Sim" : "não"}`)

//    - O produto é considerado caro (preço > 100)?
let caro = `${estoque[0].preco >100}`
console.log(`O produto ${estoque[0].nome} é caro?: ${caro? "Sim" : "não"}`)

let caro2 = `${estoque[1].preco >100}`
console.log(`O produto ${estoque[1].nome} é caro?: ${caro2? "Sim" : "não"}`)

let caro3 = `${estoque[2].preco >100}`
console.log(`O produto ${estoque[2].nome} é caro?: ${caro3? "Sim" : "não"}`)

//    - O produto tem preço abaixo de 50?
let barato = `${estoque[0].preco <50}`
console.log(`O produto ${estoque[0].nome} é barato?: ${barato? "Sim" : "não"}`)

let barato2 = `${estoque[1].preco <50}`
console.log(`O produto ${estoque[1].nome} é barato?: ${barato2? "Sim" : "não"}`)

let barato3 = `${estoque[2].preco <50}`
console.log(`O produto ${estoque[2].nome} é barato?: ${barato3? "Sim" : "não"}`)

// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:


console.log("_______________________________");
