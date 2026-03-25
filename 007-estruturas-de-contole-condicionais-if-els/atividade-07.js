// ============================================================
//   ATIVIDADE 07 – Estruturas de Controle (If / Else)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-07.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – If simples
// ------------------------------------------------------------
// a) Declare "pontos" com valor 120.
// b) Se "pontos" for maior que 100, exiba: "Nível alcançado!".
//    Mas se "pontos" for maior que 200, exiba somente: "Nível máximo alcançado!"

// → Seu código aqui:
let pontos = 320
if (pontos > 200){
    console.log("Nível máximo alcançado!")
} else if (pontos > 100){
    console.log("Nível alcançado!")
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – If / Else
// ------------------------------------------------------------
// a) Declare "hora" com o valor 14 (representando 14h).
// b) Se hora for menor que 12, exiba: "Bom dia!".
// c) Se hora for menor que 18, exiba: "Boa tarde!".
// d) Senão, exiba: "Boa noite!"

// → Seu código aqui:
let hora = 23
if (hora < 12){
    console.log("Bom dia!")
} else if (hora < 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite")
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário sua idade usando questionInt().
// b) Se a idade for maior ou igual a 18, exiba: "Adulto".
//    Se a idade for menor que 12, exiba: "Criança".
//    Senão, exiba: "Jovem".
const lerTeclado = require('readline-sync')
// → Seu código aqui:
// // let idade = lerTeclado.questionInt("Digite sua idade: " )

// if (idade >= 18){
//     console.log("Adulto")
// } else if (idade < 12){
//     console.log("Criança")
// } else {
//     console.log("Jovem")
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – If / Else If / Else
// ------------------------------------------------------------
// a) Declare "notaAluno" com valor 6.8.
// b) Em uma variável "status", usando if/else if/else, armazene:
//    - nota >= 9     → "Aprovado com mérito"
//    - nota >= 7     → "Aprovado"
//    - nota >= 5     → "Recuperação"
//    - abaixo de 5   → "Reprovado"
// c) AO final, exiba a nota e a situação com template literal.

// → Seu código aqui:
let notaAluno = 6.8

let status

if (notaAluno >= 9){
    status = "Aprovado com métito"
} else if (notaAluno >= 7){
    status = "Aprovado"
} else if (notaAluno >= 5){
    status = "Recuperação"
} else {
    status = "Reprovado"
}

console.log(`Sua nota é ${notaAluno} e situação: ${status}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – If / Else If / Else com input
// ------------------------------------------------------------
// a) Pergunte ao usuário a temperatura atual (questionFloat()).
// b) Classifique e exiba usando if/else if/else:
//    - temperatura < 10           → "Muito frio"
//    - temperatura >= 10 e < 18   → "Frio"
//    - temperatura >= 18 e <= 25  → "Agradável"
//    - temperatura > 25 e <= 35   → "Quente"
//    - temperatura > 35           → "Muito quente"

// → Seu código aqui:
// let temperatura = lerTeclado.questionInt(`Digite a temperatura: `)
// if (temperatura < 10){
//     console.log("Muito frio")
// } else if (temperatura >= 10 && temperatura < 18){
//     console.log("fri")
// } else if (temperatura >= 18 && temperatura <= 25){
//     console.log("agradavel")
// } else if (temperatura > 25 && temperatura <=35){
//     console.log("Quente")
// } else {
//     console.log("Muito quente")
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – If aninhado
// ------------------------------------------------------------
// a) Pergunte ao usuário e armazene as informações em um objeto:
//    - Nome (question()).
//    - Se possui ingresso (keyInYN()).
//    - Sua idade (questionInt()).
// b) Se NÃO possui ingresso → exiba: "<Nome>, dirija-se à bilheteria."
//    Se possui ingresso:
//      - idade < 18  → "Meia-entrada: menor de idade."
//      - idade >= 60 → "Meia-entrada: melhor idade."
//      - caso contrário → "Entrada inteira."
// → Seu código aqui:
// let entrada = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     ingresso: lerTeclado.keyInYN(`Possui ingresso: `),
//     idade: lerTeclado.questionInt(`Digite sua idade: `)
// }

// let tipoEntrada

// let entradaa

// if (!entrada.ingresso){
//     entradaa = (`${entrada.nome}, dirija-se à bilheteria.`)
// } if (entrada.idade < 18){
//     tipoEntrada = ("Meia entrada: menor idade")
// } else if (entrada.idade >= 60){
//     tipoEntrada = ("Meia entrada : melhor idade")
// } else {
//     tipoEntrada = ("Entrada inteira")
// }  if (!entrada.ingresso){
//     console.log(`${entradaa} Seu tipo de entrada é ${tipoEntrada}`)
// }

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – If com operadores lógicos (&&)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome (question()).
//    - Idade (questionInt()).
//    - Se possui habilitação (keyInYN()).
// b) Armazene os dados em um objeto chamado "motorista".
// c) Para alugar um carro, o motorista precisa ter 21 anos ou mais E possuir habilitação.
//    - Se pode alugar → exiba: "<nome>, você pode alugar o veículo."
//    - Senão          → exiba: "<nome>, você não atende aos requisitos."

// → Seu código aqui:
// let motorista = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     idade: lerTeclado.questionInt(`Digite sua idade: `),
//     temHabilitacao: lerTeclado.keyInYN(`Tem habilitação?: `)
// }

// if (motorista.idade > 21 && motorista.temHabilitacao){
//     console.log(`${motorista.nome}, você pode alugar o veículo.`)
// } else {
//     console.log(`${motorista.nome}, você não atende aos requisitos`)
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – If com operadores lógicos (||)
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se é estudante.
//    - Se é idoso, com 60 anos ou mais.
// b) Se é estudante OU idoso → exiba: "Desconto de 50% aplicado!"
//    Senão → exiba: "Sem desconto. Preço cheio."
// let usuario = {
//     ehEstudante: lerTeclado.keyInYN(`É estudante?: `),
//     ehIdoso: lerTeclado.keyInYN(`É idoso com 60 anos ou mais?: `)
// }

// if (usuario.ehEstudante || usuario.ehIdoso){
//     console.log("Desconto de 50% aplicado!")
// } else{
//     console.log("Sem desconto")
// }

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Sistema de notas completo
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do aluno.
//    - Nota da prova 1.
//    - Nota da prova 2.
// b) Armazene os dados em um objeto "aluno" e calcule a média
//    (média = (prova1 + prova2) / 2). Adicione a média ao objeto.
// c) Classifique e exiba com if/else if/else:
//    - média >= 7  → "Aprovado"
//    - média >= 5  → "Em recuperação"
//    - abaixo de 5 → "Reprovado"
// d) Exiba o objeto "aluno" com console.table().
// e) Exiba uma mensagem final: "<nome>: <situação> (média: <média>)"

// → Seu código aqui:
// let aluno = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     nota1: lerTeclado.questionInt(`Digite a nota da primeira prova: `),
//     nota2: lerTeclado.questionInt(`Digite a nota da segunda prova: `)
// }
// let media = (aluno.nota1 + aluno.nota2) / 2

// aluno.media = media
// let situação
// if (aluno.media >= 7){
//     situação = "Aprovado"
// } else if (aluno.media >= 5){
//     situação = "Em recuperação"
// } else {
//     "Reprovado"
// }
// console.table(aluno)
// console.log(`${aluno.nome}: ${situação} (média: ${aluno.media})`)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Calculadora interativa
// ------------------------------------------------------------
// → Seu código aqui:
// a) Peça ao usuário dois números usando questionFloat().
let numero1 = lerTeclado.questionFloat(`Digite um numero: `)
let numero2 = lerTeclado.questionFloat(`Digite outro numero: `)
// b) Peça ao usuário que escolha uma operação digitando um número:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão
//    Use questionInt() para capturar a escolha.
let escolha = lerTeclado.questionInt("Escolha uma operação: 1  Soma | 2  Subtracao | 3  Multiplicacao | 4  Divisao : ")
// c) Armazene os dois números, o número referente à escolha e o símbolo referente à escolha
//    em um objeto 'calculo' com as propriedades:
//    numeroA, numeroB, operacao, simbolo.
let simboloo
let calculo = {
    numeroA: numero1,
    numeroB: numero2,
    operacao: escolha,
    simbolo: simboloo
}
let resultado
// d) Com base na escolha, calcule o resultado usando if/else if, else.
//    Dica: se a operação for divisão e o segundo número for 0, exiba um aviso de erro.
if (calculo.operacao < 1 || calculo.operacao > 4){
    console.log("Tente novamente e digite uma opção válida.")
}
if (calculo.operacao == 1){
    simboloo = "+"
    resultado = calculo.numeroA + calculo.numeroB
} else if (calculo.operacao == 2){
    simboloo = "-"
    resultado = calculo.numeroA - calculo.numeroB
} else if (calculo.operacao == 3){
    simboloo = "*"
    resultado = calculo.numeroA * calculo.numeroB
} else if (calculo.operacao == 4){
    simboloo = "/"
    if (calculo.numeroB == 0){
        resultado = "Erro"
    } else{
        resultado = calculo.numeroA / calculo.numeroB
    }
    
}





// e) Exiba no console o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Exemplo: "10 + 3 = 13"
console.log(`${calculo.numeroA} ${simboloo} ${calculo.numeroB} = ${resultado}`)
// f) Realize testes para verificar se a calculadora está funcionando corretamente.
// g) Chame o professor para realizar alguns testes 🫡



console.log("_______________________________");
