// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
const i = [
     [10, 20, 30],
     [40, 50, 60],
     [70, 80, 90],
   ];
// b) Exiba: número de linhas e número de colunas.
console.log("Linhas: ", i.length);
console.log("Colunas: ", i[0].length);
// c) Exiba o elemento central (m[1][1]).
console.log(i[1][1]);

// d) Exiba o canto inferior direito (use .length).
console.log(i[i.length -1][i.length-1]);

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
   const x = [
     [1, 2, 3, 4],
     [5, 6, 7, 8],
     [9, 10, 11, 12],
   ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.
let soma = 0

for (let i = 0; i < x.length; i++) {
  for (let j = 0; j <= x.length; j++) {
    console.log(`m[${i}][${j}] = ${x[i][j]}`);
    soma += x[i][j]
  }
}
console.log(soma);

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
   const m = [
     [12,  7, 25],
     [ 3, 18,  9],
     [31, 14, 22],
   ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
maior = m[0][0]
menor = m[0][0]

let linhaMaior = null
let colunaMaior = null
let linhaMenor = null
let colunaMenor = null

for (let i = 0; i < m.length; i++) {
  for (let k = 0; k < m.length; k++) {
    if (maior < m[i][k]){
      linhaMaior =  i
      colunaMaior = k
      maior = m[i][k]
    }
    if (menor > m[i][k]){
      linhaMenor =  i
      colunaMenor = k
      menor = m[i][k]
    }
  }
}
console.log(`Maior: ${maior} || Linha ${linhaMaior} || coluna ${colunaMaior}`);
console.log(`Menor: ${menor} || Linha ${linhaMenor} || coluna ${colunaMenor}`);
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>" 
for (let i = 0; i < m.length; i++){
  let somaLinha = 0
  for (let j = 0; j < m.length; j++){
    somaLinha += m[i][j]
  }
  console.log(`linha: ${i} || Soma: ${somaLinha}`);
}
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
for (let j = 0; j < m.length; j++){
  let somaColuna = 0
  for (let i = 0; i < m.length; i++){
    somaColuna += m[i][j]
  }
  console.log(`Coluna: ${j} || Soma: ${somaColuna}`);
}
// d) Exiba a soma da DIAGONAL principal (m[i][i]).
let somaDiagonal = 0
for (let i = 0; i < m.length; i++){
  for (let j = 0; j < m.length; j++){
    somaDiagonal += m[i][i]
  }
}
console.log(`Diagonal | Soma: ${somaDiagonal}`);
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:


console.log("_______________________________");
