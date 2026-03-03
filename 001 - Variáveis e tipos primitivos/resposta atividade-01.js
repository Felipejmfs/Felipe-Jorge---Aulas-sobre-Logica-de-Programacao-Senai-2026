// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:

// a)
var meuNome = "Felipe"
// b)
var naoUsarVar = "Var não é recomendada por ser antiga e pouco usada"
// c)
let minhaIdade = 16
// d)
const ANO_NASCIMENTO = 2009
// e)

console.log(`Meu nome é ${meuNome}`)
console.log(`Minha idade é ${minhaIdade}`)
console.log(`Nasci no ano de ${ANO_NASCIMENTO}`)
console.log(naoUsarVar)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:
// a)
let cidade = "Jaraguá do Sul"
// b)
let pais = "Brasil"
// c)
let fraseMoradia = `Eu moro em ${cidade}, no ${pais}`
// d)
console.log(fraseMoradia)
console.log(`o tipo da variável acima é ${typeof fraseMoradia}`)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:
// a)
let maiorDeIdade = false
// b)
let temCNH = false
// c)

console.log(maiorDeIdade)
console.log(`o tipo da variável acima é ${typeof maiorDeIdade}`)
console.log(temCNH)
console.log(`o tipo da variável acima é ${typeof temCNH}`)


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:
// a)
let apelido
// b)
let enderecoAtual = null
// c)
console.log(apelido)
console.log(`o tipo da variável acima é${typeof apelido}`)

console.log(enderecoAtual)
console.log(`o tipo da variável acima é ${typeof enderecoAtual}`) 

//d é bug

// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42 // Vai ser tipo Number
// "texto" // Vai ser tipo String
// true // Vai ser tipo Boolean
// undefined // Vai ser tipo object
// null // Vai ser tipo null
// 3.14 Vai ser tipo Number

console.log(typeof 42)
console.log(typeof "texto")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof 3.14)





// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:
const nome = "Felipe"
let idade = 16
let altura = 1.66
let cidadeQueMoro = "Jaraguá do Sul"
let estudandoJS = true

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidadeQueMoro}, meço ${altura} e estou estudando JavaScript: ${estudandoJS}`)
