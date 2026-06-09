let saldo = 100;

const saldoEl = document.getElementById("saldo");
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const mensagem = document.getElementById("mensagem");

function atualizarSaldo() {
    saldoEl.textContent = `R$ ${saldo}`;
}

function jogar() {
    const aposta = Number(document.getElementById("aposta").value);

    if (!aposta || aposta <= 0) {
        mensagem.textContent = "Digite uma aposta válida!";
        return;
    }

    if (aposta > saldo) {
        mensagem.textContent = `Saldo insuficiente! Você possui R$ ${saldo}.`;
        return;
    }

    saldo -= aposta;

    const numA = Math.floor(Math.random() * 10) + 1;
    const numB = Math.floor(Math.random() * 10) + 1;

    slot1.textContent = numA;
    slot2.textContent = numB;

    if (numA === numB) {
        const premio = aposta * 2;
        saldo += premio;
        mensagem.textContent = `🎉 Parabéns! Você ganhou R$ ${premio}!`;
    } else {
        mensagem.textContent = "❌ Você perdeu. Tente novamente!";
    }

    atualizarSaldo();
}

function depositar() {
    const valor = Number(prompt("Quanto deseja depositar?"));

    if (!valor || valor <= 0) {
        alert("Digite um valor válido.");
        return;
    }

    saldo += valor;
    atualizarSaldo();

    mensagem.textContent = `💰 Depósito de R$ ${valor} realizado!`;
}

function sacar() {
    const valor = Number(prompt("Quanto deseja sacar?"));

    if (!valor || valor <= 0) {
        alert("Digite um valor válido.");
        return;
    }

    if (valor > saldo) {
        alert("Saldo insuficiente.");
        return;
    }

    saldo -= valor;
    atualizarSaldo();

    mensagem.textContent = `🏦 Saque de R$ ${valor} realizado!`;
}

document.getElementById("jogar").addEventListener("click", jogar);
document.getElementById("depositar").addEventListener("click", depositar);
document.getElementById("sacar").addEventListener("click", sacar);

atualizarSaldo();