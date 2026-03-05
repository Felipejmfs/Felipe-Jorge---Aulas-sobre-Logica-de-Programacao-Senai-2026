// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
let aluno = {
    nome: "Felipe",
    idade: 16,
    curso: "Desenvolvimento de sistemas"
}

console.log(aluno.nome)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.endereco = {
    cidade: "Jaraguá do Sul",
    Rua: "Rua 2"
}


console.log(aluno.endereco.cidade)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ["Montar cubo mágico", "JS", "futsal", "Jiu-Jilson"]

console.log(aluno.habilidades[0])


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [8, 6, 9, 10]

console.log(`O aluno ${aluno.nome} tirou notas ${aluno.notas} nesse ano`)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsavel = {
    nome: "Andreia",
    parentesco: "mae"
}
aluno.responsavel.nome = "Maria"
console.log(aluno.responsavel)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let aluno2 = {
    nome: "Joao",
    idade: 26,
    curso: "Desenvolvimento de sistemas"
}

let aluno3 = {
    nome: "Maria",
    idade: 46,
    curso: "Desenvolvimento de sistemas"
}

let listaDeAlunos = [aluno, aluno2, aluno3]

console.log(aluno2.nome)


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.

aluno2.notas = [2, 3, 4, 4]
aluno3.notas = [3, 10, 10, 10]
// → Seu código aqui:


console.log(`O aluno ${aluno.nome} tirou notas ${aluno.notas} nesse ano`)
console.log(`O aluno ${aluno2.nome} tirou notas ${aluno2.notas} nesse ano`)
console.log(`O aluno ${aluno3.nome} tirou notas ${aluno3.notas} nesse ano`)