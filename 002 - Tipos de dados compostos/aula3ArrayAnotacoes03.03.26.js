// Aula 03/03/2026 Array (texto) em JS

// Array são coleções ordenadas de valores
// Inclusive outros arrays e objetos
// É uma lista

// Declaração
let frutas = ["maçã", "goiaba", "uva", "banana"]
const numeros = [12, 31, 52, 123, 23]
const nome = ["fulano", "ciclano", "belcrano"]
const misto = ["texto", 10, true, frutas, nome, numeros]

console.log(misto)

// Escolher específico da Array
// Conta começa em 0 e coloca a posição

console.log(frutas[0]) //maçã primeiro da lista
console.log(frutas[1]) //goiaba segundo da lista

console.log(frutas.length) // .length retorna a quantidade de itens do array
console.log(`Quantidade de itens na lista frutas: ${frutas.length}`)
console.log(frutas[frutas.length-1]) // último da lista


// Principais métodos/funções de arrays
frutas.push("uva");     // adiciona ao fim
console.log("push ->", frutas);

frutas.pop();            // remove do fim
console.log("pop  ->", frutas);

frutas.unshift("morango"); // adiciona ao início
console.log("unshift ->", frutas);

frutas.shift();            // remove do início
console.log("shift ->", frutas);