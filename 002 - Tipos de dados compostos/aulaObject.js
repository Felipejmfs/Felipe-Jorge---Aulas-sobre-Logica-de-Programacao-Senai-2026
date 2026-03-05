// declaração de objeto usa chaves
// coloca características de objeto
// esclarecer através do código como é, o que é

let cadastroFilho = {
    nome: "Felipe",
    idade: 16,
    email: "felipe@email.com"
}

let carrinho = {
    cor: "vermelho",
    marca: "fiat",
    qtdRodas: 4
}

// exibição é normal

console.log(cadastroFilho)
console.log(`cadastro: ${cadastroFilho}`) // erro: pois não é possível converter um objeto diretamente para string

// Também podemos armazenar Listas, Variáveis e até outros Objetos dentro de um Objeto

const pessoa = {
	nome: "Mariana",
	idade: 40,
  habilidades: ["HTML", "CSS", "JavaScript"],
  trabalhando: true,
	endereco: {
		cidade: "São Paulo",
		cep: "01000-000"
    },

  filho: cadastroFilho // exiba ibjetos através de variáveis (nome do objeto.variávelescolhida)

}
console.log(pessoa)

// acessar as propriedades específicas
console.log(pessoa.nome)
console.log(pessoa.endereco.cidade)

// Acessando as propriedades/informações acessa somente uma por isso da certo


console.log(`Nome da pessoa: ${pessoa.nome}`);
console.log(`Idade da pessoa: ${pessoa.idade}`);
console.log(`Trabalhando: ${pessoa.trabalhando}`);
console.log(`Habilidades: ${pessoa.habilidades}`);
console.log(`Endereço completo: ${pessoa.endereco.cidade}, ${pessoa.endereco.cep}`);
console.log(`Filho: ${pessoa.filho.nome}`);
