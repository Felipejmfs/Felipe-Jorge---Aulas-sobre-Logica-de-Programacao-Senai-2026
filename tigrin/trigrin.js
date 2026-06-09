const lerTeclado = require('readline-sync')
let numA = null
let numB = null
let deposito = null
let saldo = 100
let saque = null
let escolha = null
let precoFicha = 10
let tela = null

function opcao() {
    do {
        console.log(`
        1 - Jogar
        2 - Depositar
        3 - Sacar
        4 - Sair`);
        escolha = lerTeclado.questionInt("Escolha uma opcao: ")
        if (escolha < 1 || escolha > 4) console.log("Digite uma opção valida!");
    } while (escolha < 1 || escolha > 4);
}


function verificacaoGanho() {
    if (numA == numB) {
        saldo += 20
        return console.log("Parabéns, você ganhou R$20!")
    } else return console.log("Você perdeu, aposta de novo, você pode recuperar!")
}

function jogar() {
    if (saldo >= precoFicha) {
        numA = Math.floor(Math.random() * 10) + 1
        numB = Math.floor(Math.random() * 10) + 1
        tela = [numA, numB]
        saldo -= precoFicha
        console.log(tela)
        verificacaoGanho()
        console.log("Saldo atual: ", saldo)
    } else console.log("Saldo insuficiente, realize um deposito para poder ganhar mais dinheiro.")
}

function depositar() {
    do {
        deposito = lerTeclado.questionInt("Quanto quer depositar?: ")
        if (deposito < 0) console.log("Digite um valor de depósito valido.")
        else {
            saldo += deposito
        }
    } while (deposito < 0);
    
    return console.log(`Deposito de ${deposito} realizado com sucesso. Saldo atual: ${saldo}`)
}

function sacar() {
    do {
        saque = lerTeclado.questionInt("Quanto quer sacar?: ")
        if (saque > saldo) console.log("Quantia maior que o disponível. Saldo atual: ", saldo)
        else {
            saldo -= saque
        }
    } while (saque < saldo);
    return console.log(`Saque de ${saque} realizado com sucesso. Saldo atual: ${saldo}`)
}
function encerrrar() {
    console.log("Encerrando... Volte para poder ganhar maissss.")
}

// parte principal do codigo

console.log("Tigrin do Felipe, vamos apostar e ganhar!")
console.log("Valor da ficha: R$10,00");
console.log(`Saldo atual: R$ ${saldo}`)

opcao()


do {
    switch (escolha) {
        case 1:
            jogar();
            break
        case 2:
            depositar();
            break
        case 3:
            sacar();
            break
        case 4:
            encerrrar();
            break
    }
} while (escolha != 4);