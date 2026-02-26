console.log("2 Tipos de variável/dados")

console.log("2.1 String (texto)")
// - 2 Tipos de variável/dados

// - 2.1 String (texto)

let qtdAlunos = 12
let característica = "melhor escola de todas"
let escola = `Heleodoro é a ${característica}`

let frase = `A ${escola} e tem ${qtdAlunos} alunos`  //variável dentro de variável na atribuição deve se usar crase, sifrão e chave


console.log(qtdAlunos)  //variáveis para serem exibidas devem ser sem aspas
console.log(escola)
console.log(frase)
console.log(typeof frase) //typeof serve para saber o tipo da variável, se é texto, número. etc
console.log("------------------------------------------------------------------------------------------")

console.log("2.2 Number (número inteiro e decimal) ---------------------------------------")
// - 2.2 Number (número inteiro e decimal) ---------------------------------------

let inteiro = 16
let decimal = 2.43
let negativo = -13

let frasee = `minha idade é ${inteiro}`

console.log(frasee)
console.log(typeof frasee)
console.log(inteiro, decimal, negativo)
console.log(typeof inteiro) // number
console.log("------------------------------------------------------------------------------------------")

console.log("2.3 Boolean (verdadeiro ou falso)")
// - 2.3 Boolean (verdadeiro ou falso)

let estáFrioHoje = false
let choveuHoje = true

console.log(estáFrioHoje)
console.log(choveuHoje)
console.log(typeof estáFrioHoje)

console.log("------------------------------------------------------------------------------------------")

console.log("2.4 Undefined (variável sem valor declarado)")
// 2.4 Undefined (variável sem valor declarado)
let valor
console.log(valor)

console.log("------------------------------------------------------------------------------------------")
console.log("2.5 Null (ausência intencional de valor)")

let usuário = null
console.log(usuario)
console.log(typeof usuario)