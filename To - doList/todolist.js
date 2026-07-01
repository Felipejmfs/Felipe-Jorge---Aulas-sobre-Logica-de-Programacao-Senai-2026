const lT = require("readline-sync")

let listaDeTarefas = []
let acao = null
let tarefaIndice = null
let titulo = ""
let descricao = ""
let resetar = false

function menuInicial() {
    console.log("===========================")
    console.log("     LISTA DE TAREFAS     ")
    console.log("===========================")
    console.log("1 - Adicionar tarefa")
    console.log("2 - Visualizar lista")
    console.log("3 - Visualizar item")
    console.log("4 - Editar item")
    console.log("5 - Excluir item")
    console.log("6 - Filtrar")
    console.log("7 - Encerrar")
    console.log("===========================")
    do {
        acao = lT.questionInt("Escolha uma opcao: ")
        if (acao < 1 || acao > 7) console.log("Opcao invalida, tente novamente.")
    } while (acao < 1 || acao > 7);
}

function verificaTituloVazio() {
    while (titulo.length <= 0) {
        console.log("Titulo invalido, tente novamente.")
        titulo = lT.question("Digite um titulo valido: ")
    }
}

function verfificaDescricaoVazia() {
    while (descricao.length <= 0) {
        console.log("Descricao invalida, tente novamente.")
        descricao = lT.question("Digite uma descricao valida: ")
    }
}
function verificaTituloJaExistente() {
    while (
        listaDeTarefas.find(
            replicaTitulo => replicaTitulo.titulo.toLowerCase() === titulo.toLowerCase())
    ) {
        console.log("Ja existe uma tarefa com esse titulo");
        titulo = lT.question("Digite um titulo diferente: ")
    }
}

function adicionarTarefa() {
    do {
        titulo = lT.question("Digite o titulo da tarefa: ")

        verificaTituloVazio()

        verificaTituloJaExistente()

        descricao = lT.question("Escreva uma descricao sobre a tarefa: ")

        verfificaDescricaoVazia()

        listaDeTarefas.push(
            {
                titulo: titulo,
                descricao: descricao
            }
        )
        console.log("Tarefa adicionada com sucesso!");
    } while (titulo.length < 0 || descricao.length < 0);
    console.log(listaDeTarefas);
}

function visualizarListaDeTarefas() {
    if (listaDeTarefas.length < 1) {
        console.log("Nao ha tarefas na lista, adicione alguma para poder exibir.")
        return
    }
    for (let i = 0; i < listaDeTarefas.length; i++) {
        console.log(`Tarefa ${i + 1} - Titulo: ${listaDeTarefas[i].titulo}`)
    }
    console.log("Todas tarefas foram exibidas.");
}

function pedirIndice() {
    let indiceDaTarefa = lT.questionInt("Digite o indice da tarefa que deseja: ")
    while (indiceDaTarefa > listaDeTarefas.length || listaDeindiceDaTarefaTarefas <= 0) {
        console.log("Indice invalido.");
        indiceDaTarefa = lT.questionInt("Digite um indice valido: ")
        indiceDaTarefa--
    }
}

function visualizarTarefa() {
    do {
        pedirIndice(indiceDaTarefa)
        console.log("===================");
        console.log("TITULO:");
        console.log(listaDeTarefas[indiceDaTarefa].titulo)
        console.log("===================");
        console.log("DESCRICAO");
        console.log(listaDeTarefas[indiceDaTarefa].descricao)
        console.log("===================");
        break
    } while (true);
    return
}

function editarTarefa() {
    pedirIndice(indiceDaTarefa)
    do {
        
        let editarTituloOuDescricao = lT.questionInt(`
        1 - Editar titulo
        2 - Editar descricao
        Digite a opcao que deseja: 
        `)
    } while (editarTituloOuDescricao < 1 || editarTituloOuDescricao > 2);
}
function processarOpcao() {
    do {

        menuInicial()

        switch (acao) {
            case 1:
                adicionarTarefa();
                break;
            case 2:
                visualizarListaDeTarefas();
                break;
            case 3:
                visualizarTarefa();
                break;
            case 4:
                editarTarefa();
                break;
            case 5:
                excluirTarefa();
                break;
            case 6:
                filtrarTarefas();
                break;
            case 7:
                encerrar();
                break;
            default:
                break;
        }
    } while (true);
}
processarOpcao()