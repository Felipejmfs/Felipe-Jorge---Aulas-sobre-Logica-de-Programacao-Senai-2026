// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

// console.log("Iniciando o programa...")
// console.info("O programa está sendo iniciado")
// console.warn("Você deve iniciar o programa com node e nome do arquivo!")
// console.error("Você fez tudo errado")


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

let lerTeclado = require('readline-sync')

// const nomeUsuario = lerTeclado.question("Digite seu nome: ")

// const idadeUsuario = lerTeclado.questionInt("Digite sua idade: ")

// console.log(`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos.`)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// const usuarioNome = lerTeclado.question("Digite o seu nome: ")
// const usuarioIdade = lerTeclado.questionInt("Digite o sua idade: ")
// const usuarioCidade = lerTeclado.question("Digite o sua cidade: ")

// let ficha = {
//     nome: usuarioNome,
//     idade: usuarioIdade,
//     cidade: usuarioCidade
// }

// console.table(ficha)


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

// let sabeDirigir = lerTeclado.keyInYN("Você sabe dirigir? [y/n]: ")
// let maiorDeIdade = lerTeclado.keyInYN("Você é maior de idade? [y/n]: ")

// let respostaSabeDirigir = `${sabeDirigir ? "sabe dirigir": "não sabe dirigir"}`
// let respostaMaiorDeIdade = `${maiorDeIdade ? "Você é maior de idade": "Você não é maior de idade"}`

// console.log(`Olá, ${respostaMaiorDeIdade} e ${respostaSabeDirigir}.`);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

// const comidafav = lerTeclado.question("Digite sua comida favortia: ")
// const comidafav2 = lerTeclado.question("Digite sua segunda comida favortia: ")
// const comidafav3 = lerTeclado.question("Digite sua terceira comida favortia: ")

// let comidasFavoritas = [comidafav, comidafav2, comidafav3]
// console.table(comidasFavoritas)



// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

// const nomeUsuario = lerTeclado.question("Digite seu nome: ")
// const profissaoUsuario = lerTeclado.question("Digite sua profissao: ")
// const cidadeUsuario = lerTeclado.question("Digite sua cidade: ")

// let cadastroPessoal = {
//     nome: nomeUsuario,
//     profissao: profissaoUsuario,
//     cidade: cidadeUsuario
// }
// console.table(cadastroPessoal)




// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazene os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:


// const nomeUsuario = lerTeclado.question("Digite seu nome: ")
// const idadeUsuario = lerTeclado.questionInt("Digite sua idade: ")
// const enderecoUsuario = {
//     cidade: lerTeclado.question("Digite a sua cidade: "),
//     rua: lerTeclado.question("Digite a sua rua: "),
//     numero: lerTeclado.questionInt("Digite a seu numero: ")
// }

// let primeiroUsuario = {
//     nome: nomeUsuario,
//     idade: idadeUsuario,
//     endereco: enderecoUsuario
// }

// const nomeUsuario2 = lerTeclado.question("Digite seu nome: ")
// const idadeUsuario2 = lerTeclado.questionInt("Digite sua idade: ")
// const enderecoUsuario2 = {
//     cidade: lerTeclado.question("Digite a sua cidade: "),
//     rua: lerTeclado.question("Digite a sua rua: "),
//     numero: lerTeclado.questionInt("Digite a seu numero: ")
// }

// let segundoUsuario = {
//     nome: nomeUsuario2,
//     idade: idadeUsuario2,
//     endereco: enderecoUsuario2
// }

// const nomeUsuario3 = lerTeclado.question("Digite seu nome: ")
// const idadeUsuario3 = lerTeclado.questionInt("Digite sua idade: ")
// const enderecoUsuario3 = {
//     cidade: lerTeclado.question("Digite a sua cidade: "),
//     rua: lerTeclado.question("Digite a sua rua: "),
//     numero: lerTeclado.questionInt("Digite a seu numero: ")
// }
// let terceiroUsuario = {
//     nome: nomeUsuario3,
//     idade: idadeUsuario3,
//     endereco: enderecoUsuario3
// }


// let listaDeUsuarios = [primeiroUsuario, segundoUsuario, terceiroUsuario]

// console.table(listaDeUsuarios)
// console.log(listaDeUsuarios[1].nome, listaDeUsuarios[1].idade)
// console.log(listaDeUsuarios[2].endereco)
// console.log(listaDeUsuarios[0].nome, listaDeUsuarios[1].endereco.rua)

// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

// const nomeAluno = lerTeclado.question("Digite o seu nome: ")
// const notasAluno = {
//     primeiraNota: lerTeclado.questionInt("Digite sua primeira nota: "),
//     segundaNota: lerTeclado.questionInt("Digite sua segunda nota: "),
//     terceiraNota: lerTeclado.questionInt("Digite sua terceira nota: ")
// }
// let aluno= {
//     nome: nomeAluno,
//     nota: notasAluno
// }

// const nomeAluno2 = lerTeclado.question("Digite o seu nome: ")
// const notasAluno2 = {
//     primeiraNota: lerTeclado.questionInt("Digite sua primeira nota: "),
//     segundaNota: lerTeclado.questionInt("Digite sua segunda nota: "),
//     terceiraNota: lerTeclado.questionInt("Digite sua terceira nota: ")
// }
// let aluno2= {
//     nome: nomeAluno,
//     nota: notasAluno
// }

// const nomeAluno3 = lerTeclado.question("Digite o seu nome: ")
// const notasAluno3 = {
//     primeiraNota: lerTeclado.questionInt("Digite sua primeira nota: "),
//     segundaNota: lerTeclado.questionInt("Digite sua segunda nota: "),
//     terceiraNota: lerTeclado.questionInt("Digite sua terceira nota: ")
// }
// let aluno3= {
//     nome: nomeAluno,
//     nota: notasAluno
// }

// let turma = [aluno, aluno2, aluno3]

// console.table(turma)


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
// let nome = lerTeclado.question("Digite o nome do produto: ")
// let categoria = lerTeclado.question("Digite a categoria do produto: ")
// let preco = lerTeclado.question("Digite o preço do produto: ")
// let qtd = lerTeclado.questionInt("Digite a quantidade em estoque do produto: ")
// let disponivel = lerTeclado.keyInYN("O produto está disponível para venda?: ")

// let produto= {
//     nomeProduto: nome,
//     categoriaProduto: categoria,
//     precoProduto: preco,
//     qtdProduto: qtd,
//     disponibilidadeProduto: disponivel
// }
// console.table(produto)
// console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.qtd}`)


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

let nome = lerTeclado.question("Digite o nome do medicamento: ")
let preco = lerTeclado.question("Digite o preco do medicamento: ")
let estoque = lerTeclado.keyInYN("O medicamento está em estoque? ")

let medicamento = {
    nomeMedicamento: nome,
    precoMedicamento: preco,
    estoqueMedicamento: estoque
}

let medicamento2 = {
    nomeMedicamento2: nome,
    precoMedicamento2: preco,
    estoqueMedicamento2: estoque
}
let estoqueFarmacia = []
estoqueFarmacia.push(medicamento)
estoqueFarmacia.push(medicamento2)
console.table(estoqueFarmacia)
console.log(estoqueFarmacia[1].nomeMedicamento, estoqueFarmacia[1].precoMedicamento)
console.log(estoqueFarmacia[0].nomeMedicamento, estoqueFarmacia[1].estoqueMedicamento)