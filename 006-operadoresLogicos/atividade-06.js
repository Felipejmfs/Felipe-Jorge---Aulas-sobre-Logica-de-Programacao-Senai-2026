// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
let trueEtrue = true && true
console.log(`true & true: ${trueEtrue}`)
//   b) true && false
let trueEfalse = true && false
console.log(`true & false: ${trueEfalse}`)
//   c) false && true
let falseETrue = false && true
console.log(`false & true: ${falseETrue}`)
//   d) false && false
let falseEFalse = false && false
console.log(`false & false: ${falseEFalse}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
let trueOUtrue = true || true
console.log(`true ou true: ${trueOUtrue}`)
//   b) true || false
let trueOUfalse = true || false
console.log(`true ou false: ${trueOUfalse}`)
//   c) false || true
let falseOUTrue = false || true
console.log(`false ou true: ${falseOUTrue}`)
//   d) false || false
let falseOUFalse = false || false
console.log(`false ou false: ${falseOUFalse}`)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
let sistemaAtivo = true
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
let modoManutencao = !sistemaAtivo
// c) Declare "lugarVago" com valor false.
let lugarVago = false
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
let lugarOcupado = !lugarVago
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.
console.log(`Sistema ativo?: ${sistemaAtivo}`)
console.log(`Modo manutenção: ${modoManutencao}`)
console.log(`Lugar vago?: ${lugarVago}`)
console.log(`Lugar ocupado?: ${lugarOcupado}`)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
const lerTeclado = require('readline-sync')
let peso = lerTeclado.questionFloat(`Digite o seu peso: `)
let altura = lerTeclado.questionFloat(`Digite o sua altura: `)
let usuario = {
    peso: peso,
    altura: altura
}
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
let imc = usuario.peso / (usuario.altura ** 2)
usuario.imc = imc
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
let imcAbaixoDoPeso = usuario.imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
let imcNormal = usuario.imc >= 18.5 && usuario.imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
let imcAcimaDoPeso = usuario.imc >= 25 && usuario.imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.
console.log(`Seu imc está abaixo do peso: ${imcAbaixoDoPeso}`)
console.log(`Seu imc está normal: ${imcNormal}`)
console.log(`Seu imc está acima do peso: ${imcAcimaDoPeso}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
let notaFinal = 4.8
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
let precisaRecuperacao = notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
let reprovado = notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
let precisaDeAjuda = precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.
console.log(`Recuperação: ${precisaRecuperacao}`)
console.log(`reprovado: ${reprovado}`)
console.log(`precisa de ajuda: ${precisaDeAjuda}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
let temperatura =  38.2
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
let diagnostico = `${temperatura >=37 ? "Febre detectada" : "Temperatura normal"}`
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.
console.log(`O disgnótico é: ${diagnostico} por causa da temperatura: ${temperatura}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
let velocidade = 110
let limiteVelocidade = 100
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
let statusMulta = `${velocidade > limiteVelocidade ? "Multa aplicada" : "Velocidade regular"}`
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.
console.log(`Status da multa: ${statusMulta}. Velocidade registrada: ${velocidade}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
let ehEstudante = lerTeclado.keyInYN(`Você é bolsista?: `)
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
let mensalidadeCurso = lerTeclado.keyInYN(`Você paga mais de R$ 1000,00 pelo curso?: `)
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
let mensagem = `${ehEstudante && mensalidadeCurso ? "Desconto aplicado!" : "Desconto não aplicado."}`
// c) Exiba a variável "mensagem" com template literal.
console.log(`É estudante: ${ehEstudante}. Status desconto: ${mensagem}`)

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
let usuarioo = {
    idade: lerTeclado.questionInt(`Digite sua idade: `),
    ingresso: lerTeclado.keyInYN(`Tem ingresso?: `),
    clube: lerTeclado.keyInYN(`É associado ao clube?: `)
}
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
let podeEntrarNormal = (usuarioo.idade >= 18 && usuarioo.ingresso) || usuarioo.clube
let podeEntrarSocio = usuarioo.ingresso && usuarioo.clube
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."
console.log(`${podeEntrarNormal || podeEntrarSocio ? "Entrada liberada!" : "Entrada negada"}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
let produto = {
    nome: lerTeclado.question(`DIgite o nome: `),
    qtd: lerTeclado.questionInt(`Quantidade: `),
    ativo: lerTeclado.keyInYN(`Ativo no sistema?: `)
}
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
let temEstoque = produto.qtd > 0
//    - "produtoDisponivel": temEstoque e está ativo
let produtoDisponivel = temEstoque && produto.ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
let produtoIndisponivel = !temEstoque || !produto.ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
usuario1 = {
    adm: lerTeclado.keyInYN(`É administrador?: `),
    logado: lerTeclado.keyInYN(`Está logado?: `),
    ativo: lerTeclado.keyInYN(`Está com a conta ativa?: `)
}
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
let acessoSistema = usuario1.logado && usuario1.ativo
//    - "acessoAdmin": acessoSistema e ehAdmin
let acessoAdmin = acessoSistema && usuario1.adm
//    - "acessoNegado": não logado ou não contaAtiva
let acessoNegado = !usuario1.logado || !usuario.ativo
// d) Exiba todos os resultados.
console.log(`Acesso ao sistema: ${acessoSistema}`)
console.log(`Acesso ao admin: ${acessoAdmin}`)
console.log(`Acesso negado: ${acessoNegado}`)
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
let credenciaisSistema = {
    usuario: "adm",
    senha: "1234"
}
// b) Pergunte ao usuário:
//    - usuário
//    - senha
let pergutaUsuario = lerTeclado.question(`Digite o nome de usuário: `)
let perguntaSenha = lerTeclado.question(`Digite a senha: `)
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
let usuarioCorreto = pergutaUsuario === credenciaisSistema.usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
let senhaCorreta = perguntaSenha === credenciaisSistema.senha
//    - "loginValido": usuarioCorreto e senhaCorreta
let loginValido = usuarioCorreto && senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."
console.log(`${loginValido ? "Longin realizado com sucesso!" : "Usuário ou senha incorretos."}`)
// → Seu código aqui:


console.log("_______________________________");
