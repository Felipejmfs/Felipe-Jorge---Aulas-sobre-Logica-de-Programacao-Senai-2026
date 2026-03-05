// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
console.log(frutas[0])
  console.log(frutas[2])
frutas[1] = 'abacaxi'

console.log(frutas);


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:
let letrass2 = letras1[0].concat(letras1[2]).concat(letras1[5])
console.log(letrass2)

letras3 = letrass2.slice(1, 3)
console.log(letras3);


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.
const batata = letras2[1].concat(letras2[0]).concat(letras2[5]).concat(letras2[0]).concat(letras2[5]).concat(letras2[0])

console.log(batata);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { nome: 'Junin', idade: 22, cidade: 'Porto Alegre' };
// a) Acesse e exiba a propriedade 'nome' e 'cidade'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' por atribuição direta.

// → Seu código aqui:
console.log(`${pessoa.nome}, ${pessoa.cidade}`)

pessoa.cuso = "Programação"
console.log(pessoa);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
  usuario: 'ana123',
  dados: { nome: 'Ana', idade: 19 },
  interesses: ['música', 'fotografia', 'viagens']
};
// a) Acesse o nome dentro de 'dados' e o segundo interesse.

console.log(`A ${perfil.dados.nome} tem interesse em ${perfil.interesses}`)

// b) Altere o primeiro interesse para 'arte' por atribuição direta.

perfil.interesses[0] = "arte"

// → Seu código aqui:

console.log(`A ${perfil.dados.nome} tem interesse em ${perfil.interesses}`)


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo id, nome e preço.
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos e os valores são o nome
// e os valores são os objetos de produto correspondentes (sem usar loops ou funções).

// → Seu código aqui:

let hamburguer = {
  id: 111,
  nome: "hambúrguer",
  preço: 30
}

let piano = {
  id: 112,
  nome: "piano",
  preço: 1130
}

let violao = {
  id: 113,
  nome: "violão",
  preço: 600
}

let produtos = [hamburguer, piano, violao]

let catálogo = {
  chave1: produtos[0].id,
  nome1: produtos[0].nome,
  valor1: produtos[0],
  chave2: produtos[1].id,
  nome2: produtos[1].nome,
  valor2: produtos[1],
  chave3: produtos[2].id,
  nome3: produtos[2].nome,
  valor3: produtos[2]
}
console.log(produtos)
console.log(catálogo)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas

// → Seu código aqui:
let varrerCasa = {
  id:1,
  titulo: "varrer a casa",
  concluida: true
}

let tirarLixo = {
  id:2,
  titulo: "tirar o lixo",
  concluida: false
}

let lavarLouça = {
  id:3,
  titulo: "lavar a louça",
  concluida: false
}

let listaTarefas = [varrerCasa, tirarLixo, lavarLouça]

tirarLixo.concluida = true

let tarefasNaoConcluidas = [lavarLouça]

console.log("_______________________________");