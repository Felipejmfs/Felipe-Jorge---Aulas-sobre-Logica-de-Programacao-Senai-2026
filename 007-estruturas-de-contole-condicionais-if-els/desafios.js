// ============================================================
//   DESAFIOS (para quem já terminou a atividade 07) – If / Else
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

const lerTeclado = require('readline-sync')
// // ------------------------------------------------------------
// // DESAFIO 1 – Classificador de IMC
// // ------------------------------------------------------------
// // Já realizamos um exercício similar, mas agora vamos aprimorar e exibir somente o resultado final.
// // a) Pergunte ao usuário seu nome, peso (kg) e altura (m).
// // b) Armazene os dados em um objeto "pessoa".
// let pessoa = {
//     nome: lerTeclado.question(`Digite o seu nome: `),
//     peso: lerTeclado.questionFloat(`Digite seu peso: `),
//     altura: lerTeclado.questionFloat(`Digite sua altura: `)
// }
// // c) Calcule o IMC: peso / (altura ** 2). Adicione ao objeto.
// pessoa.imc = (pessoa.peso / (pessoa.altura ** 2)).toFixed(0)
// // d) Classifique o IMC usando if/else if/else e adicione a classificação ao objeto:
// //    - IMC < 18.5          → "Abaixo do peso"
// //    - IMC >= 18.5 e < 25  → "Peso normal"
// //    - IMC >= 25 e < 30    → "Sobrepeso"
// //    - IMC >= 30 e < 35    → "Obesidade grau I"
// //    - IMC >= 35 e < 40    → "Obesidade grau II"
// //    - IMC >= 40           → "Obesidade grau III"
// if (pessoa.imc < 18.5){
//     pessoa.classificacao = "Abaixo do peso"
// } else if (pessoa.imc >= 18.5 && pessoa.imc <25){
//     pessoa.classificacao = "Peso normal"
// } else if (pessoa.imc >= 25 && pessoa.imc < 30){
//     pessoa.classificacao = "Sobrepeso"
// } else if (pessoa.imc >=30 && pessoa.imc < 35){
//     pessoa.classificacao = "Obesidade grau I"
// } else if (pessoa.imc >= 35 && pessoa.imc < 40){
//     pessoa.classificacao = "Obesidade grau 2"
// } else if (pessoa.imc >= 40){
//     pessoa.classificacao = "Obesidade grau 3"
// }
// // e) Exiba o objeto com console.table().
// console.table(pessoa)
// // f) Exiba uma mensagem final:
// //    "<nome>, seu IMC é <imc> – <classificação>."
// console.log(`${pessoa.nome}, seu imc é ${pessoa.imc} - ${pessoa.classificacao}`);


// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Caixa eletrônico
// ------------------------------------------------------------
// a) Defina um objeto "conta" com:
//    - titular: "Maria"
//    - saldo: 1500
//    - bloqueada: false
//    - senha: 1234
let conta = {
    titular: "Maria",
    saldo: 1500,
    bloqueada: false,
    senha: 1234
}
// b) Peça ao usuário:
//    - Senha de 4 dígitos.

// c) Verifique se a senha está correta.
//    - Se estiver incorreta → "Senha incorreta. Operação cancelada."
//    - Se estive correta, pergunte ao usuário se deseja sacar ou depositar um valor
// d) Se ele escolher sacar, pergunte qual valor que deseja sacar.
//    Se ele escolher depositar, pergunte qual valor que deseja depositar.
// e) Se for saque, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do saque for menor ou igual a 0 → "Valor inválido."
//    3. Se o saldo for insuficiente → "Saldo insuficiente. Saldo atual: R$ <saldo>"
//    4. Caso contrário → realize o saque, atualize o saldo e exiba:
//       "Saque de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// f) Se for depósito, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do depósito for menor ou igual a 0 → "Valor inválido."
//    3. Caso contrário → realize o depósito, atualize o saldo e exiba:
//       "Depósito de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// Evite repetir linhas de código.
// Verifique se é possível fazer verificações uma única vez, alterando a lógica ao invés de duplicar código.
let senhaRecebida =lerTeclado.questionInt(`Digite a senha de 4 digitos: `)
let saqueOuDeposito

if (conta.senha != senhaRecebida){
    console.log("Senha incorreta. Operação cancelada.")
} else {
    if(conta.bloqueada){
    console.log("Conta bloqueada. Procure uma agência")
} else {
    if (lerTeclado.keyInYN(`Digite y para sacar e n para depositar: `)){
        valorSaqueOuDeposito = lerTeclado.questionInt(`Quanto quer sacar? `)
        if (valorSaqueOuDeposito <= 0){
            console.log("Valor invalido");
        } else if (conta.saldo < valorSaqueOuDeposito){
            console.log(`Saldo insuficiente. Saldo atual: R$${conta.saldo}`)
        } else {
            conta.saldo -= valorSaqueOuDeposito
            console.log(`Saque de R$${valorSaqueOuDeposito} realizado. Novo saldo: R$${conta.saldo}`)
        }
    } else {
        valorSaqueOuDeposito = lerTeclado.questionInt(`Quanto quer depositar?: `)
        if (valorSaqueOuDeposito <= 0){
            console.log("Valor invalido");
        }  else {
            conta.saldo += valorSaqueOuDeposito
            console.log(`Depósito de R$${valorSaqueOuDeposito} realizado. Novo saldo: R$${conta.saldo}`)
        }
    }
}}
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Classificação de filmes por faixa etária
// ------------------------------------------------------------
// Classificação indicativa:
//   - Livre          → todas as idades
//   - 10 anos        → 10 anos ou mais
//   - 12 anos        → 12 anos ou mais
//   - 14 anos        → 14 anos ou mais
//   - 16 anos        → 16 anos ou mais
//   - 18 anos        → 18 anos ou mais
//
// a) Pergunte ao usuário:
//    - Nome do espectador.
//    - Idade do espectador.
//    - Classificação do filme escolhido:
//      0 – Livre | 10 – 10 anos | 12 – 12 anos |
//      14 – 14 anos | 16 – 16 anos | 18 – 18 anos
// b) Armazene os dados em um objeto "cinema".

// c) Usando if/else if/else, verifique se o espectador pode assistir ao filme:
//    - Se a classificação for 0 (Livre) → sempre pode.
//    - Nos demais casos, compare a idade com a classificação.
// d) Exiba o resultado:
//    - Pode assistir → "<nome> pode assistir. Boa sessão!"
//    - Não pode → "<nome> não pode assistir. Classificação: <classificação> anos."
let cinema = {
    nome: lerTeclado.question(`Digite seu nome: `),
    idade: lerTeclado.questionInt(`Digite sua idade: `),
    classificacao: lerTeclado.questionInt(`Digite a classificação do filme escolhido:  `)
}

if (cinema.classificacao == 0){
    console.log(`${cinema.nome} pode assistir. Boa sessão!`)
} else if (cinema.classificacao == 10 && cinema.idade >= 10){
    console.log(`${cinema.nome} pode assistir. Boa sessão!`)
} else if (cinema.classificacao == 12 && cinema.idade >= 12){
    console.log(`${cinema.nome} pode assistir. Boa sessão!`)
} else if (cinema.classificacao == 14 && cinema.idade >= 14){
    console.log(`${cinema.nome} pode assistir. Boa sessão!`)
} else if (cinema.classificacao == 16 && cinema.idade >= 16){
    console.log(`${cinema.nome} pode assistir. Boa sessão!`)
} else if (cinema.classificacao == 18 && cinema.idade >= 18){
    console.log(`${cinema.nome} pode assistir. Boa sessão!`)
} else {
    console.log(`${cinema.nome} não pode assistir. Classificação: ${cinema.classificacao} anos.`)
}
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Simulador de pedido de lanche
// ------------------------------------------------------------
// Cardápio:
//   1 – X-Burguer R$ 22,00
//   2 – X-Frango  R$ 20,00
//   3 – X-Veggie  R$ 18,00
//   4 – Combo (lanche + batata + refri)  R$ 35,00
//
// Adicionais (só para os itens 1, 2 e 3):
//   - Batata frita: + R$ 8,00
//   - Refrigerante: + R$ 5,00
//
// a) Pergunte ao usuário:
//    - Nome.
//    - Número do lanche desejado.
//    - Se o lanche não for o Combo:
//        - Quer batata frita?
//        - Quer refrigerante?
// b) Armazene todos os dados e o total calculado em um objeto "pedido".
// c) Calcule o total com base nas escolhas.
// d) Exiba o objeto "pedido" com console.table().
// e) Exiba o resumo final com template literal:
//    "Pedido de <nome>: <lanche> + adicionais = R$ <total>"

// → Seu código aqui:

let pedido = {
    nome: lerTeclado.question("Nome: "),
    lanche: "",
    batata: false,
    refrigerante: false,
    total: 0
};

let opcao = lerTeclado.questionInt(
    "Lanche (1-X Burguer, 2-X Frango, 3-X Veggie, 4-Combo): "
);

if (opcao === 1) {
    pedido.lanche = "X-Burguer";
    pedido.total = 22;
}
else if (opcao === 2) {
    pedido.lanche = "X-Frango";
    pedido.total = 20;
}
else if (opcao === 3) {
    pedido.lanche = "X-Veggie";
    pedido.total = 18;
}
else if (opcao === 4) {
    pedido.lanche = "Combo";
    pedido.total = 35;
}

if (opcao !== 4) {

    pedido.batata = lerTeclado.keyInYN("Quer batata frita? ");
    pedido.refrigerante = lerTeclado.keyInYN("Quer refrigerante? ");

    if (pedido.batata) {
        pedido.total += 8;
    }

    if (pedido.refrigerante) {
        pedido.total += 5;
    }
}

console.table(pedido);

console.log(
    `Pedido de ${pedido.nome}: ${pedido.lanche} + adicionais = R$ ${pedido.total.toFixed(2)}`
);




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Simulador de semáforo inteligente
// ------------------------------------------------------------
// Um semáforo funciona assim:
//   - Verde  → siga (velocidade permitida: até 60 km/h)
//   - Amarelo → atenção (reduza a velocidade)
//   - Vermelho → pare
//
// a) Pergunte ao usuário - simulando os dados captados pelo radar:
//    - Cor atual do semáforo: "verde", "amarelo" ou "vermelho".
//    - Velocidade atual do veículo em km/h.
// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade menor ou igual que 60 → "Tudo certo. Pode seguir."
//    - "verde" e velocidade maior que 60 → "Atenção: acima do limite no sinal verde."
//    - "amarelo" → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade maior que 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade igual a 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor → "Cor de semáforo inválida."
// c) Exiba o resultado com template literal.

// → Seu código aqui:
let cor = lerTeclado.question("Cor do semáforo: ").toLowerCase();
let velocidade = lerTeclado.questionFloat("Velocidade atual: ");

let mensagem = "";

if (cor === "verde" && velocidade <= 60) {
    mensagem = "Tudo certo. Pode seguir.";
}
else if (cor === "verde" && velocidade > 60) {
    mensagem = "Atenção: acima do limite no sinal verde.";
}
else if (cor === "amarelo") {
    mensagem = "Reduza a velocidade e prepare-se para parar.";
}
else if (cor === "vermelho" && velocidade > 0) {
    mensagem = "PARE! Você avançou o sinal vermelho.";
}
else if (cor === "vermelho" && velocidade === 0) {
    mensagem = "Correto. Aguarde o sinal abrir.";
}
else {
    mensagem = "Cor de semáforo inválida.";
}

console.log(`${mensagem}`);


console.log("_______________________________");
