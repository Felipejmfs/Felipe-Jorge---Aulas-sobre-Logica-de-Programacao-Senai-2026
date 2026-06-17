// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:
let saldoInicial = lerTeclado.questionFloat("Saldo inicial: ");
let taxa = lerTeclado.questionFloat("Taxa de juros (%): ");
let meses = lerTeclado.questionInt("Quantidade de meses: ");

let saldo = saldoInicial;
let historico = [];

for (let i = 1; i <= meses; i++) {
    saldo = saldo * (1 + taxa / 100);

    historico.push({
        mes: i,
        saldo: saldo.toFixed(2)
    });

    console.log(`Mês ${i}: R$ ${saldo.toFixed(2)}`);
}

let lucro = saldo - saldoInicial;

console.log(`Saldo final: R$ ${saldo.toFixed(2)}`);
console.log(`Lucro obtido: R$ ${lucro.toFixed(2)}`);

console.table(historico);



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:

let quantidade = lerTeclado.questionInt("Quantidade de alunos: ");

let alunos = [];
let somaMedias = 0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

let maiorMedia = -1;
let menorMedia = 11;
let nomeMaior = "";
let nomeMenor = "";

for (let i = 1; i <= quantidade; i++) {

    let nome = lerTeclado.question("Nome: ");
    let nota1 = lerTeclado.questionFloat("Nota 1: ");
    let nota2 = lerTeclado.questionFloat("Nota 2: ");
    let nota3 = lerTeclado.questionFloat("Nota 3: ");

    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
        aprovados++;
    }
    else if (media >= 5) {
        situacao = "Recuperação";
        recuperacao++;
    }
    else {
        situacao = "Reprovado";
        reprovados++;
    }

    alunos.push({
        nome,
        notas: [nota1, nota2, nota3],
        media: media.toFixed(2),
        situacao
    });

    somaMedias += media;

    if (media > maiorMedia) {
        maiorMedia = media;
        nomeMaior = nome;
    }

    if (media < menorMedia) {
        menorMedia = media;
        nomeMenor = nome;
    }
}

for (let aluno of alunos) {
    console.log(`${aluno.nome} | Média: ${aluno.media} | ${aluno.situacao}`);
}

console.log(`Média geral: ${(somaMedias / quantidade).toFixed(2)}`);
console.log(`Maior média: ${nomeMaior}`);
console.log(`Menor média: ${nomeMenor}`);
console.log(`Aprovados: ${aprovados}`);
console.log(`Recuperação: ${recuperacao}`);
console.log(`Reprovados: ${reprovados}`);

console.table(alunos);



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:

let secreto = Math.floor(Math.random() * 100) + 1;

let venceu = false;
let tentativasUsadas = 0;

for (let i = 1; i <= 7; i++) {

    let palpite = lerTeclado.questionInt("Digite seu palpite: ");

    tentativasUsadas = i;

    if (palpite === secreto) {
        console.log(`Parabéns! Acertou em ${i} tentativa(s)!`);
        venceu = true;
        break;
    }

    if (palpite > secreto) {
        console.log("Muito alto!");
    } else {
        console.log("Muito baixo!");
    }

    console.log(`Tentativas restantes: ${7 - i}`);
}

if (!venceu) {
    console.log(`Game over! O número era ${secreto}.`);
}

console.log(`Número secreto: ${secreto}`);
console.log(`Tentativas usadas: ${tentativasUsadas}`);
console.log(`Resultado: ${venceu ? "Vitória" : "Derrota"}`);

console.log("_______________________________");

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:

const vendas = [
    12500, 9800, 15200, 11000, 13750, 8900,
    17300, 14600, 10200, 16800, 19500, 22000
];

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

let total = 0;

for (let venda of vendas) {
    total += venda;
}

let media = total / vendas.length;

let maiorVenda = vendas[0];
let menorVenda = vendas[0];
let mesMaior = meses[0];
let mesMenor = meses[0];

let acimaMedia = 0;
let abaixoMedia = 0;

let relatorio = [];

for (let i = 0; i < vendas.length; i++) {

    if (vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
        mesMaior = meses[i];
    }

    if (vendas[i] < menorVenda) {
        menorVenda = vendas[i];
        mesMenor = meses[i];
    }

    let situacao =
        vendas[i] >= media ? "Acima da média" : "Abaixo da média";

    if (vendas[i] >= media) {
        acimaMedia++;
    } else {
        abaixoMedia++;
    }

    relatorio.push({
        mes: meses[i],
        venda: vendas[i],
        situacao
    });

    console.log(
        `${meses[i]}: R$ ${vendas[i].toFixed(2)} - ${situacao}`
    );
}

console.log(`Total anual: R$ ${total.toFixed(2)}`);
console.log(`Média mensal: R$ ${media.toFixed(2)}`);
console.log(`Maior venda: ${mesMaior} - R$ ${maiorVenda.toFixed(2)}`);
console.log(`Menor venda: ${mesMenor} - R$ ${menorVenda.toFixed(2)}`);
console.log(`Meses acima da média: ${acimaMedia}`);
console.log(`Meses abaixo da média: ${abaixoMedia}`);

console.table(relatorio);

console.log("_______________________________");


console.log("_______________________________");
