// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
console.log(`=============================
Execício 1

`)

let cores = ["amarelo", "azul", "verde", "roxo"]

console.log(cores[0])
console.log(cores[cores.length-1])


console.log(`=============================
Execício 2

`)

// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:
cores.push("preto")
cores.pop()

console.log(cores)
console.log(cores.length)

console.log(`=============================
Execício 3

`)
// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:

let numeros = [12, 31, 543, 243]
console.log(`Números: ${numeros}, quantidade de números: ${numeros.length}`)


console.log(`=============================
Execício 4

`)
// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:
let nulo = null
let indefinido
let todosTiposDeDadosQueSei = [12,"texto", true, cores, indefinido, nulo]

console.log(`Arquivos armazenados: ${todosTiposDeDadosQueSei}. Quantidade de arquivos: ${todosTiposDeDadosQueSei.length}`)


console.log(`=============================
Execício 5

`)

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:
let variosTiposDeDados = [31, "Hello WOrld", nulo, indefinido, cores, true, 912]

console.log(variosTiposDeDados)

variosTiposDeDados.pop()
variosTiposDeDados.shift()

console.log(variosTiposDeDados)

variosTiposDeDados.push(312)
variosTiposDeDados.unshift(false)

console.log(variosTiposDeDados)


// ------------------------------------------------------------
// EXERCÍCIO 6 – indexOf, includes
// ------------------------------------------------------------
// a) Dado um array de nomes, verifique o índice de um nome específico.
// b) Busque por um nome específico que não existe na lista.

const nomes = ["Ana", "Bruno", "Carolina", "Daniel", "Eduardo"];
// → Seu código aqui:


console.log(nomes.includes("felipe"))
console.log(nomes.indexOf("Ana"))

// ------------------------------------------------------------
// EXERCÍCIO 7 – slice, concat
// ------------------------------------------------------------
// a) Dado dois arrays de letras, junte os 2 em um só usando concat() e exiba o resultado.
// b) Use slice para criar uma nova array, contendo somente os elementos entre a 2ª e a 4ª posição
//    do array que você criou usando o concat() e exiba o resultado.

const letras1 = ["a", "b", "c", "d", "e"];
const letras2 = ["f", "g"];
// → Seu código aqui:
let letras3 = letras1.concat(letras2)

console.log(letras3)
letras4 = letras3.slice(2, 4)

console.log(letras4)
// ------------------------------------------------------------
// EXERCÍCIO 8 – arrays aninhados (array dentro de array) e flat
// ------------------------------------------------------------
// a) Crie um array aninhado, ebixa-o. Acesso elementos internos deste array.
// b) Use flat para achatar o array em um unico nível (os arrays internos se tornam elementos individuais) e exiba-o.

// → Seu código aqui:
let listaa = [31, cores, nomes]



console.log(listaa.flat());