// ============================================================
//   DESAFIOS (para quem já terminou a atividade 06) – Operadores Lógicos
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro de candidato
// ------------------------------------------------------------

let candidato = {
    nome: lerTeclado.question("Digite o nome: "),
    idade: lerTeclado.questionInt("Digite a idade: "),
    anosExperiencia: lerTeclado.questionInt("Anos de experiência: "),
    possuiSuperior: lerTeclado.keyInYN("Possui ensino superior? "),
    possuiTecnico: lerTeclado.keyInYN("Possui curso técnico? "),
    resideNoBrasil: lerTeclado.keyInYN("Reside no Brasil? ")
};

let criteriosAprovacao = {
    idadeValida: candidato.idade >= 18 && candidato.idade <= 40,
    experienciaSuficiente: candidato.anosExperiencia >= 2,
    formacaoAdequada: candidato.possuiSuperior || candidato.possuiTecnico
};

criteriosAprovacao.candidatoAprovado =
    criteriosAprovacao.idadeValida &&
    criteriosAprovacao.experienciaSuficiente &&
    criteriosAprovacao.formacaoAdequada &&
    candidato.resideNoBrasil;

console.table(candidato);
console.table(criteriosAprovacao);

console.log(
    criteriosAprovacao.candidatoAprovado
        ? `Parabéns, ${candidato.nome}! Você está aprovado(a) para a próxima fase.`
        : `Infelizmente, ${candidato.nome}, seu perfil não atende aos requisitos desta vaga.`
);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Classificação de temperatura
// ------------------------------------------------------------

let temperatura = lerTeclado.questionFloat("Digite a temperatura atual: ");

let classificacao =
    temperatura < 10 ? "Muito frio" :
    temperatura < 18 ? "Frio" :
    temperatura <= 25 ? "Agradável" :
    temperatura <= 35 ? "Quente" :
    "Muito quente";

console.log(`Classificação: ${classificacao}`);

let estaEmAmbienteInterno = lerTeclado.keyInYN("Está em ambiente interno? ");

let precisaArCondicionado =
    temperatura > 28 && estaEmAmbienteInterno;

console.log(
    precisaArCondicionado
        ? "Precisa de ar condicionado."
        : "Não precisa de ar condicionado."
);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Plano de academia
// ------------------------------------------------------------

let nome = lerTeclado.question("Digite o nome: ");
let idade = lerTeclado.questionInt("Digite a idade: ");
let ehEstudante = lerTeclado.keyInYN("É estudante? ");
let pagaNoPix = lerTeclado.keyInYN("Vai pagar no PIX? ");
let planoEscolhido = lerTeclado.questionInt("Escolha o plano (1 a 4): ");

let valorBase =
    planoEscolhido === 1 ? 120 :
    planoEscolhido === 2 ? 150 :
    planoEscolhido === 3 ? 180 :
    200;

let descontoEstudante = ehEstudante && idade < 25;
let descontoIdoso = idade >= 60;
let descontoPix = pagaNoPix && !descontoEstudante && !descontoIdoso;

let percentualDesconto =
    descontoEstudante ? 10 :
    descontoIdoso ? 15 :
    descontoPix ? 5 :
    0;

let valorFinal = valorBase - (valorBase * percentualDesconto / 100);

let plano = {
    nome,
    idade,
    valorBase,
    percentualDesconto,
    valorFinal
};

console.table(plano);

console.log(
    `${nome}, seu plano custa R$ ${valorBase}. Você recebeu ${percentualDesconto}% de desconto e pagará R$ ${valorFinal.toFixed(2)} por mês.`
);

console.log("_______________________________");