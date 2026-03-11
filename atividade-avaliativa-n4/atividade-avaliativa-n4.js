// Atividade Prática Avaliativa - N4

// Assuntos englobados:

// Variáveis
// Tipos (primitivos e compostos)
// Arrays
// Objetos
// Input e Output de Dados

// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | Freelance : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:

// // questão a) e b)
const lerTeclado = require('readline-sync')

let nome = lerTeclado.question("Digite o seu nome: ")
let profissao = lerTeclado.question("Digite o sua profissao: ")
let cidade = lerTeclado.question("Digite a sua cidade: ")
let email = lerTeclado.question("Digite o seu email: ")
let telefone = lerTeclado.question("Digite o seu telefone: ")
let anoExperiencia = lerTeclado.questionInt("Digite seus anos de experiencia: ")
let disponivelParaFreelance = lerTeclado.keyInYN("Está disponível para freelance?: ")

// questão c)

console.log(`
============================================
|             CARTÃO DE VISITAS            |
============================================
| Nome : ${nome} |
| Profissão : ${profissao} |
| Cidade : ${cidade}  |
| E-mail : ${email} |
| Telefone : ${telefone} |
| Experiência : ${anoExperiencia} |
| Freelance : ${disponivelParaFreelance} |
============================================
`)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:

// // questão a)
let materias = ["Matematica", "artes", "ciencia", "ed. fisica", "fisica"]

// //questão b)
console.log(materias[0])
console.log(materias[4])

// //questão c)
console.log(materias.length)

// //questão d)
console.log(`A 3ª matéria da lista é ${materias[2]} e a lista tem ${materias.length} matérias no total.`)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.

notas[2] = 6.0
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.

notas[3] = 8.5
// c) Exiba o array atualizado.

console.log(notas)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.

materias.push("Educação Física")
console.log(materias)
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.

materias.pop()
console.log(materias)
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.

materias.unshift("Filosofia")
console.log(materias)
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.

materias.shift()
console.log(materias)
// e) Após todas as operações, exiba quantos itens restaram.

console.log(`Total de materias: ${materias}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.

console.log(cidadesBrasil.indexOf("Curitiba"))
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.

console.log(cidadesBrasil.indexOf("Recife"))
// O que significa esse retorno? Escreva a explicação em um comentário.

// Significa que o valor procurdo não está ou não exite na lista
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.

console.log(cidadesBrasil.includes("Salvador"))
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.

console.log(cidadesBrasil.includes("Belém"))
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
let todasAsCidades = (cidadesBrasil.concat(cidadesPortugal))
console.log(todasAsCidades)
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

let cidadesDoMeio = todasAsCidades.slice(3, 7)
console.log(cidadesDoMeio)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]

let grupos = [
    ["Ana", "Bruno", "Carlos"],
    ["Diana", "Eduardo"],
    ["Fernanda", "Gabriel", "Helena", "Igor"]
    ]

// b) Exiba "grupos".

console.log(grupos)
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).

console.log(grupos[2][1])
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.

let todosOsAlunos = grupos.flat()
console.log(todosOsAlunos)
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

console.log(grupos.length) // .lenght contabilisa a quantidade de itens armazenados como se fossem apenas 1, mesmo que sejam listas ou objetos com vários itens dentro.
console.log(todosOsAlunos.length) // conta cada objeto como 1 valor, mesmo que dentro deles tenha vários valores

// → Seu código aqui:


console.log("_______________________________");



// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
let produto = {
    nome: "Batata",
    preco: 12,
    disponivel: true,
    categoria: "Alimento"
}

// b) Exiba cada propriedade separadamente usando um console.log() para cada.
console.log(produto.nome)
console.log(produto.preco)
console.log(produto.disponivel)
console.log(produto.categoria)
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e está disponível: ${produto.disponivel}.`)


// d) Exiba o objeto utilizando console.table().

console.table(produto)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.

produto.preco = 18
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.

produto.disponivel = false
// c) Adicione uma nova propriedade "estoque" com o valor 20.

produto.estoque = 20
// d) Exiba o objeto completo.

console.log(produto)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
let funcionario = {
    nome: "Fulano",
    cargo: "Auxiliar de ajudante de servente de pedreiro",
    salario: 12,
    ativo: true
}
let funcionario2 = {
    nome: "Ciclano",
    cargo: "Ajudante de servente de pedreiro",
    salario: 144,
    ativo: true
}
let funcionario3 = {
    nome: "Belcrano",
    cargo: "Servente de pedreiro",
    salario: 2000,
    ativo: true
}
let listaFuncionarios = [funcionario, funcionario2, funcionario3]
// b) Exiba o nome do primeiro funcionário.
console.log(listaFuncionarios[0].nome)
// c) Exiba o cargo do terceiro funcionário.
console.log(listaFuncionarios[2].cargo)
// d) Exiba o salário do segundo funcionário.
console.log(listaFuncionarios[1].salario)
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
listaFuncionarios[0].cargo = "Chefe de obra"
// f) Crie um novo objeto e armazene-o em uma variável.
let funcionario4 = {
    nome: "Silcrano",
    cargo: "Pedreiro",
    salario: 8000,
    ativo: true
}
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
listaFuncionarios.push(funcionario4)
// h) Exiba o array completo após todas as alterações.
console.log(listaFuncionarios)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
let loja = {
    nomeLoja: "Melhor Loja",
    cnpj: "123131903",
    endereco: {
        rua: "Lage",
        numero: 12,
        cidade: "Jaraga",
        estado: "SC"
    },
    categoriasProdutos: ["Alimento", "Limpeza", "Armazenamento"],
    aberta: true
    
}
// b) Exiba o nome da loja.
console.log(loja.nomeLoja)
// c) Exiba a cidade onde a loja está localizada.
console.log(loja.endereco)
// d) Exiba a primeira categoria de produto.
console.log(loja.categoriasProdutos[0])
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
console.log(`A loja ${loja.nomeLoja} fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e está aberta: ${loja.aberta}`)
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".

loja.categoriasProdutos.push("reciclavel")
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
console.log(`Algumas categorias da loja ${loja.nomeLoja} são: ${loja.categoriasProdutos[0]} e ${loja.categoriasProdutos[3]}.`)
// h) Exiba o objeto "loja" completo.
console.log(loja)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes

let escola = {
    nomeEscola: "Escola boa",
    cidade: "jaraga",
    diretor: {
        nome: "jao",
        tempoDeServico: 12
    },
    turmas: [{
        período: "manhã",
        alunos: ["Fuçano", "ciclano", "belcano"]}, {
            período: "tarde",
            alunos: ["ana", "Maria", "julia"]
        }]}

// b) Exiba o nome da escola.
console.log(escola.nomeEscola)
// c) Exiba o nome do diretor.
console.log(escola.diretor.nome)
// d) Exiba o período da segunda turma.
console.log(escola.turmas[1].período)
// e) Exiba o terceiro aluno da primeira turma.
console.log(escola.turmas[0].alunos[2])
// f) Adicione um novo aluno à segunda turma usando push().
escola.turmas[1].alunos.push("Naruto")
// g) Altere o período da primeira turma para "Noite".
escola.turmas[0].período = "Noite"
// h) Exiba o objeto "escola" completo no final.
console.log(escola)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
let nomeBiblioteca = lerTeclado.question("Digite o nome da biblioteca: ")
let anoDeFundacao = lerTeclado.questionInt("Digite o ano de fundacao da biblioteca: ")
let capacidadeLivros = lerTeclado.questionInt("Digite a capacidade de livros da biblioteca: ")
let bibliotecaAberta = lerTeclado.keyInYN("A biblioteca está aberta?: ")

console.log(`A biblioteca ${nomeBiblioteca}, fundada em ${anoDeFundacao}, que tem a capacidade de livros de ${capacidadeLivros}, está aberta: ${bibliotecaAberta}`)



//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
let livro = {
    titulo: lerTeclado.question("Digite o nome do livro: "),
    autor: lerTeclado.question("Digite o nome do autor do livro: "),
    ano: lerTeclado.questionInt("Digite o ano do livro: "),
    paginas: lerTeclado.questionInt("Digite a quantidade de paginas do livro: "),
    disponivel: lerTeclado.keyInYN("Está disponivel? ")
}
let livro2 = {
    titulo: lerTeclado.question("Digite o nome do livro: "),
    autor: lerTeclado.question("Digite o nome do autor do livro: "),
    ano: lerTeclado.questionInt("Digite o ano do livro: "),
    paginas: lerTeclado.questionInt("Digite a quantidade de paginas do livro: "),
    disponivel: lerTeclado.keyInYN("Está disponivel? ")
}
let livro3 ={
    titulo: lerTeclado.question("Digite o nome do livro: "),
    autor: lerTeclado.question("Digite o nome do autor do livro: "),
    ano: lerTeclado.questionInt("Digite o ano do livro: "),
    paginas: lerTeclado.questionInt("Digite a quantidade de paginas do livro: "),
    disponivel: lerTeclado.keyInYN("Está disponivel? ")
}


let acervo = [livro, livro2, livro3]
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
console.log(acervo[0].titulo)
console.log(acervo[1].autor)
console.log(acervo[2].paginas)
console.log(acervo.length)
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
acervo[0].disponivel = false
// • Altere o título do 3º livro para um título diferente.
acervo[2].titulo = "diferente"
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
acervo.push({
    titulo: "joaozinho passeando",
    autor: "joaozinho",
    ano: 31,
    paginas: 8642,
    disponivel: true
})
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
let secoes = ["ficção", "ciencias", "historia", "infantil"]
console.log(0, 3)
secoes.push("Tecnologia")
secoes.shift()
console.log(secoes)



// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:
console.log(`A biblioteca ${nomeBiblioteca} fundada no ano de ${anoDeFundacao}, tem ${acervo.length} livros no acervo e ${secoes.length} seções disponíveis. Segue os livros disponíveis: Livro ${livro.titulo}, autor: ${livro.autor}; Livro ${livro2.titulo}, autor: ${livro2.autor}; Livro ${livro3.titulo}, autor: ${livro.autor};`)


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:


console.log("_______________________________");