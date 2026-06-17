// ============================================================
// Loja de Itens – Menu Persistente
// ============================================================
//
// INSTRUÇÕES e REGRAS:
// Uma loja vende itens de um catálogo.
// O menu principal repete até o usuário escolher "Sair".
// O usuário começa com nenhum item e 200 reais.
// O usuário deve poder:
//   Visualizar o catálogo
//   Comprar itens do catálogo
//   Vender itens do inventário
//   Visualizar seus itens
// O valor de revenda de itens deve ser 70% do preço original, arredondado.
// Após o usuário escolher "Sair", exiba um resumo do cliente: nome, dinheiro restante e itens no inventário.
//
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CATÁLOGO DA LOJA - Altere a vontade, mantendo a estrutura { id, nome, preco, estoque }
// ============================================================

const catalogo = [
  { id: 1, nome: "Espada de Ferro", preco: 80, estoque: 2 },
  { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5 },
  { id: 3, nome: "Poção de Cura", preco: 30, estoque: 10 },
  { id: 4, nome: "Arco Longo", preco: 65, estoque: 3 },
  { id: 5, nome: "Botas Velozes", preco: 45, estoque: 4 },
  { id: 6, nome: "Batata", preco: 15, estoque: 20 },
  { id: 7, nome: "Cajado Mágico", preco: 95, estoque: 1 },
  { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2 }
];

// ============================================================
// ESTADO DO CLIENTE - não altere a estrutura
// ============================================================

const Cliente = {
  nome: "", // deve ser preenchido pelo usuário
  moedas: 200,
  inventario: []
};

// ============================================================
// INÍCIO
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:

// ============================================================
// INÍCIO
// ============================================================

Cliente.nome = lerTeclado.question("Digite seu nome: ");

let opcao;

do {

  console.log(`
=========================
1 - Ver catálogo
2 - Comprar item
3 - Vender item
4 - Ver inventário
0 - Sair
=========================
`);

  opcao = lerTeclado.questionInt("Escolha uma opção: ");

  switch (opcao) {

    case 1:

      console.table(catalogo);
      break;

    case 2:

      console.table(catalogo);

      let idCompra = lerTeclado.questionInt(
        "Digite o ID do item que deseja comprar: "
      );

      let itemCompra = catalogo.find(item => item.id === idCompra);

      if (!itemCompra) {
        console.log("Item não encontrado.");
      }
      else if (itemCompra.estoque <= 0) {
        console.log("Item sem estoque.");
      }
      else if (Cliente.moedas < itemCompra.preco) {
        console.log("Você não possui moedas suficientes.");
      }
      else {
        Cliente.moedas -= itemCompra.preco;
        Cliente.inventario.push(itemCompra.nome);
        itemCompra.estoque--;

        console.log(
          `${itemCompra.nome} comprado com sucesso!`
        );
      }

      break;

    case 3:

      if (Cliente.inventario.length === 0) {
        console.log("Seu inventário está vazio.");
        break;
      }

      console.log("Inventário:");

      for (let i = 0; i < Cliente.inventario.length; i++) {
        console.log(`${i + 1} - ${Cliente.inventario[i]}`);
      }

      let itemVenda = lerTeclado.questionInt(
        "Qual item deseja vender? "
      );

      if (
        itemVenda < 1 ||
        itemVenda > Cliente.inventario.length
      ) {
        console.log("Item inválido.");
      }
      else {

        let nomeItem =
          Cliente.inventario[itemVenda - 1];

        let itemCatalogo =
          catalogo.find(item => item.nome === nomeItem);

        let valorRevenda =
          Math.round(itemCatalogo.preco * 0.7);

        Cliente.moedas += valorRevenda;

        itemCatalogo.estoque++;

        Cliente.inventario.splice(itemVenda - 1, 1);

        console.log(
          `${nomeItem} vendido por ${valorRevenda} moedas.`
        );
      }

      break;

    case 4:

      console.log(`Cliente: ${Cliente.nome}`);
      console.log(`Moedas: ${Cliente.moedas}`);

      if (Cliente.inventario.length === 0) {
        console.log("Inventário vazio.");
      }
      else {
        console.log("Itens:");

        for (let item of Cliente.inventario) {
          console.log(`- ${item}`);
        }
      }

      break;

    case 0:

      console.log("Saindo da loja...");
      break;

    default:

      console.log("Opção inválida.");
  }

} while (opcao !== 0);

// ============================================================
// RESUMO FINAL
// ============================================================

console.log("\n===== RESUMO FINAL =====");
console.log(`Nome: ${Cliente.nome}`);
console.log(`Moedas restantes: ${Cliente.moedas}`);

if (Cliente.inventario.length === 0) {
  console.log("Itens: Nenhum");
}
else {
  console.log("Itens:");

  for (let item of Cliente.inventario) {
    console.log(`- ${item}`);
  }
}