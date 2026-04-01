// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com numero
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao numero (1 = Mercurio, 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Jupiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta nao encontrado."

// → Seu código aqui:
// let planeta = 3
// switch(planeta){
// case 1:
// console.log("Mercurio")
//     break;
// case 2:
// console.log("Venus")
//     break;
// case 3:
// console.log("Terra")
//     break;
// case 4:
// console.log("Marte")
//     break;
// case 5:
// console.log("Jupiter")
//     break;
// case 6:
// console.log("Saturno")
//     break;
// case 7:
// console.log("Urano")
//     break;
// case 8:
// console.log("Netuno")
//     break;
// default:
// console.log("Planeta nao encontrado.") 
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direcao desconhecida."

// → Seu código aqui:
// let direcao = "norte"
// switch(direcao){
// case "norte": 
// console.log("Seguindo para o Norte ↑");
//     break;
// case "sul": 
// console.log("Seguindo para o sul ↑");
//     break;
// case "leste": 
// console.log("Seguindo para o leste ↑");
//     break;
// case "oeste": 
// console.log("Seguindo para o oeste ↑");
//     break;
// default:
// console.log("Direcao desconhecida.")
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:
// let tipoVeiculo = "moto"

// switch(tipoVeiculo){
// case "bicicleta":
// case "moto":
// case "carro":
// console.log("Veículo leve");
//     break;
// case "caminhao":
// case "onibus":
// console.log("Veículo pesado.");
//     break;
// default:
// console.log("Tipo desconhecido.");

// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (numero)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuario:
//    1 – Manha | 2 – Tarde | 3 – Noite
// b) Peça ao usuario que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudacao correspondente:
//    - 1 → "Bom dia! Turno da manha."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opcao invalida."

// → Seu código aqui:
// console.log("1 – Manha | 2 – Tarde | 3 – Noite");

// let turno = lerTeclado.questionInt("Digite o seu turno de acordo com os numeros acima: ")

// switch (turno){
// case 1:
// console.log("Bom dia! Turno da manha.");
//     break;
// case 2:
// console.log("Boa tarde! Turno da tarde.");
//     break;
// case 3:
// console.log("Bom noite! Turno da noite.");
//     break;
// default:
// console.log("Opcao invalida.");
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuario qual é a estacao do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descricao curta da estacao:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovacao."
//    - default     → "Estacao nao reconhecida."

// → Seu código aqui:
// let estacao = lerTeclado.question(`Digite sua estacao do ano fav: `)

// switch(estacao){
// case "verao":
// console.log("Dias quentes e férias!");
//     break;
// case "outono":
// console.log("Folhas caindo e temperaturas amenas.");
//     break;
// case "inverno":
// console.log("Frio, cobertores e chocolate quente.");
//     break;
// case "primavera":
// console.log("Flores, calor e renovacao.");
//     break;
// default:
// console.log("Estacao nao reconhecida.");
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuario um numero de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia util"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Numero invalido"
// → Seu código aqui:
// let semana = lerTeclado.questionInt(`Digite um numero de 1 a 7 representando os dias da semana: `)

// switch (semana) {
//     case 6:
//     case 7:
//     console.log("Fds");
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     console.log("Dia util");
//     default:
//     console.log("Dia invalido");
//         break;
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuario:
//    - nome
//    - categoria: numero de 1 a 4 | 1 – Eletronico | 2 – Vestuario | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletronico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuario" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria invalida."
// c) Exiba o objeto com console.table().
// → Seu código aqui:
// let produto = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     categoria: lerTeclado.questionInt("Digite um numero de 1 a 4 | 1 = Eletronico | 2 = Vestuario | 3 = Alimento | 4 = Livro: "),
//     preco: lerTeclado.questionFloat(`Digite o preco do produto: `),
//     descricaoCategoria: null
// }
// switch (produto.categoria) {
//     case 1:
//         produto.descricaoCategoria = `"Eletronico" e garantia: "12 meses"`
//         break;
//     case 2:
//         produto.descricaoCategoria = `"Vestuario" e garantia: "Troca em 30 dias"`
//         break;
//     case 3:
//         produto.descricaoCategoria = `"Alimento" e garantia: "Ver validade"`
//         break;
//     case 4:
//         produto.descricaoCategoria = `"Livro" e garantia: "Sem garantia"`
//         break;
//     default:
//         produto.descricaoCategoria = "Categoria invalida e sem garantia";
// }
// console.table(produto)
console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 8 – Conversor de nota para conceito e cor
// // ------------------------------------------------------------
// // a) Pergunte ao usuario:
// //    - Nome
// //    - Nota de 0 a 10 (questionInt()).
// // b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
// //    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
// //    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
// //    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
// //    - 4 ou 3   → conceito: "D", mensagem: "Em recuperacao."
// //    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
// //    - default  → "Nota invalida."
// // c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"
// // → Seu código aqui:
// let usuario = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     nota: lerTeclado.questionInt(`Digite sua nota: `)
// }
// let conceito = null
// let mensagem = null
// switch (usuario.nota) {
//     case 10:
//     case 9:
//         conceito = "A"
//         mensagem =  "Excelente!"
//         break;
//     case 8:
//     case 7:  
//         conceito = "B"
//         mensagem =  "Muito bom!"
//         break;
//     case 6:
//     case 5:  
//     conceito = "C"
//         mensagem =  "Suficiente."
//         break;
//     case 4:
//     case 3:
//     conceito = "D"
//         mensagem =  "Em recuperacao."  
//         break;
//     case 2:
//     case 1:  
//     case 0:
//     conceito = "E"
//         mensagem =  "Reprovado."
//         break;
//     default:
//     console.log(`Nota invalida.`)
// }
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuario dois numeros (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtracao | 3 – Multiplicacao | 4 – Divisao | 5 – Resto
// c) Peça ao usuario que escolha uma operacao (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operacao for 4 (divisao) e o divisor for 0, exiba:
//    "Erro: divisao por zero nao é permitida."
//    No default, exiba: "Operacao invalida."
// → Seu código aqui:
let numeroA = lerTeclado.questionFloat(`Digite um numero: `)
let numeroB = lerTeclado.questionFloat(`Digite outro numero: `)
let operacao = lerTeclado.questionInt(`1 – Soma | 2 – Subtracao | 3 – Multiplicacao | 4 – Divisao | 5 – Resto: `)
let resultado = null
let simbolo = null

switch (operacao) {
    case 1:
    simbolo = "+"
    resultado = numeroA + numeroB
        break;
    case 2:
    simbolo = "-"
    resultado = numeroA - numeroB
        break;
    case 3:
    simbolo = "*"
    resultado = numeroA * numeroB
        break;
    case 4:
    simbolo = "/"
        switch (numeroB) {
            case 0:
            console.log("Erro: divisao por zero nao é permitida.")
                break;
            default:
            resultado = numeroA / numeroB
                break;
        }
        break;
    case 5:
    simbolo = "%"
    resultado = numeroA % numeroB
        break;
    default:
    console.log(`Operacao invalida.`)
}
if (operacao >=1 && operacao <= 5 && numeroB != 0){
    console.log(`${numeroA} ${simbolo} ${numeroB} = ${resultado}`)
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuario uma opcao (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opcao invalida."

// → Seu código aqui:
let loja = {
    nome: "TechShop",
    saldo: 0
}
console.log("1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair");
let escolha = lerTeclado.questionInt(`Escolha uma das opções acima: `)
let produtos = [{ produto: "Mouse", preco: 89.90 }, { produto: "Teclado", preco: 200.90 }, { produto: "Headset", preco: 9090 }]
console.table(produtos)
let produtoEscolhido = lerTeclado.question(`Digite o nome do produto escolhido: `)
let precoProdutoEscolhido = lerTeclado.question(`Digite o preco do produto escolhido: `)

switch (produtoEscolhido) {
    case "Mouse":
    saldo += produtos[0].preco
        break;
    case "Teclado":
    saldo += produtos[1].preco
        break;
    case "Headset":
    saldo += produtos[2].preco
        break;
    default:
    console.log("Opção inválida."); 
}
if (produtoEscolhido == "Mouse" || produtoEscolhido == "Teclado" || produtoEscolhido == "Headset"){
    console.log("Produto adicionado ao carrinho.")
    console.log(`Total no carrinho: R$ ${loja.saldo}`)
    console.log("Obrigado por visitar a TechShop!")
}
console.log("_______________________________");
