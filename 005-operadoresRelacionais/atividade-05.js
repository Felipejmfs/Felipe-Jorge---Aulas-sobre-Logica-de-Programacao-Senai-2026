// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
const lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
console.log(10 == 10)
console.log(10 === 10)
//   2) 10 e "10"
console.log(10 == "10")
console.log(10 === "10")
//   3) 0 e false
console.log(0 == false)
console.log(0 === false)
//   4) null e undefined
console.log(null == undefined)
console.log(null === undefined)
//   5) "JS" e "JS"
console.log("js" == "js")
console.log("js" === "js")

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
console.log(5 != 5)
console.log(5 !== 5)
//   2) 5 e "5"
console.log(5 != "5")
console.log(5 !== "5")
//   3) 7 e 3
console.log(7 != 3)
console.log(7 !== 3)
//   4) true e 1
console.log(true != 1)
console.log(true !== 1)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"
let salarioA = 3500
let salarioB = 4200
console.log(`Salário A R$ ${salarioA} > Salário B R$ ${salarioB}: ${salarioA > salarioB}`)
console.log(`Salário A R$ ${salarioA} < Salário B R$ ${salarioB}: ${salarioA < salarioB}`)
console.log(`Salário A R$ ${salarioA} >= Salário B R$ ${salarioB}: ${salarioA >= salarioB}`)
console.log(`Salário A R$ ${salarioA} <= Salário B R$ ${salarioB}: ${salarioA <= salarioB}`)
console.log(`Salário A R$ ${salarioA} === Salário B R$ ${salarioB}: ${salarioA === salarioB}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
let estoque = 0
// b) Armazene em "temEstoque" o resultado de: estoque > 0
let temEstoque = estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
let estoqueZerado = estoque === 0
// d) Declare "temperatura" com valor 36.5.
let temperatura = 36.5
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
let febre = temperatura >= 37.6
// f) Exiba cada variável usando template literal.
console.log(`Tem estoque?: ${temEstoque}`)
console.log(`Tem estoque?: ${estoqueZerado}`)
console.log(`Tem febre?: ${febre}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
let num1 = lerTeclado.questionFloat(`Digite um número: `)
let num2 = lerTeclado.questionFloat(`Digite um número: `)
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
let Num1MaiorQueNum2 = num1 > num2
let Num1MenorQueNum2 = num1 < num2
let Num1IgualQueNum2 = num1 === num2
let Num1MaiorIgualQueNum2 = num1 >= num2
// c) Exiba cada resultado com template literal.
console.log(`O Num1 é maior que Num2?: ${Num1MaiorQueNum2}`)
console.log(`O Num1 é menor que Num2?: ${Num1MenorQueNum2}`)
console.log(`O Num1 é igual que Num2?: ${Num1IgualQueNum2}`)
console.log(`O Num1 é maior ou igual que Num2?: ${Num1MaiorIgualQueNum2}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
let preco = lerTeclado.questionFloat(`Digite o preço do produto: `)
// b) Defina uma constante "precoMaximo" com valor 100.
const precoMaximo = 100
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
let estaDentroDoOrcamento = preco <= precoMaximo
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
let esteItemEhCaro = preco > precoMaximo
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"
console.log(`
Preço informado: ${preco}
Dentro do orçamento R$ ${precoMaximo}?: ${estaDentroDoOrcamento ? "Sim" : "Não"}
Item caro R$ ${precoMaximo}?: ${esteItemEhCaro ? "Sim" : "Não"}`) //true ou false


// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
let pessoa = {
    nome: lerTeclado.question(`Digite o seu nome: `),
    idade: lerTeclado.questionInt(`Digite a sua idade: `)
}
let pessoa2 = {
    nome: lerTeclado.question(`Digite o seu nome: `),
    idade: lerTeclado.questionInt(`Digite a sua idade: `)
}
let cadastro = [pessoa, pessoa2]
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
let idadeMaior = cadastro[0].idade > cadastro[1].idade
//    - idadePessoa1 === idadePessoa2
let idadeIgual = cadastro[0].idade === cadastro[1].idade
//    - idadePessoa1 >= 18 (maior de idade)
let maiorDeIdade1 = cadastro[0].idade > 18
//    - idadePessoa2 >= 18 (maior de idade)
let maiorDeIdade2 = cadastro[1].idade > 18
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
console.log(`Idade da ${cadastro[0].nome} é ${cadastro[0].idade} e ela é ${maiorDeIdade1 ? "Maior de Idade" : "Menor de idade"}`)
console.log(`Idade da ${cadastro[1].nome} é ${cadastro[1].idade} e ela é ${maiorDeIdade2 ? "Maior de Idade" : "Menor de idade"}`)
console.log(`Idade da ${cadastro[0].nome} é ${idadeMaior ? "maior que a da" : "menor que a da"} ${cadastro[1].nome}`)
console.log(`Idade da ${cadastro[0].nome} é ${idadeIgual ? "igual que a da" : "diferente que a da"} ${cadastro[1].nome}`)
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.
console.log(`A pessoa mais velha é: ${idadeMaior ? cadastro[0].nome : cadastro[1].nome}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
let aluno = {
    nome: lerTeclado.question(`Digite o nome do aluno: `),
    nota1: lerTeclado.questionFloat(`Digite a nota 1: `),
    nota2: lerTeclado.questionFloat(`Digite a nota 2: `),
    nota3: lerTeclado.questionFloat(`Digite a nota 3: `)
}
let aluno2 = {
    nome: lerTeclado.question(`Digite o nome do aluno: `),
    nota1: lerTeclado.questionFloat(`Digite a nota 1: `),
    nota2: lerTeclado.questionFloat(`Digite a nota 2: `),
    nota3: lerTeclado.questionFloat(`Digite a nota 3: `)
}
let alunos = [aluno, aluno2]
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
let mediaAluno1 = (alunos[0].nota1 + alunos[0].nota2 + alunos[0].nota3) / 3
let mediaAluno2 = (alunos[1].nota1 + alunos[1].nota2 + alunos[1].nota3) / 3
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
console.log(`O aluno que  obteve a maior média foi: ${mediaAluno1 > mediaAluno2 ? alunos[0].nome : alunos[1].nome}`)
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
console.log(`O aluno com primeira maior nota foi: ${alunos[0].nota1 > alunos[1].nota1 ? alunos[0].nome : alunos[1].nome}`)
console.log(`O aluno com segunda maior nota foi: ${alunos[0].nota2> alunos[1].nota2 ? alunos[0].nome : alunos[1].nome}`)
console.log(`O aluno com terceira maior nota foi: ${alunos[0].nota3 > alunos[1].nota3 ? alunos[0].nome : alunos[1].nome}`)
console.log("_______________________________");
