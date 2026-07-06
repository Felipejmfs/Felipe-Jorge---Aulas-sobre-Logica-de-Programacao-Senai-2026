const lT = require("readline-sync")

let listaDeTarefas = []
let acao = null
let tarefaIndice = null
let titulo = ""
let descricao = ""
let resetar = false
let indiceDaTarefa = null
let tituloNovoQueQuerEditar = null
let sistemaRodando = true

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

function validaTitulo() {
    while (titulo.length <= 0 ||
        listaDeTarefas.find(
            replicaTitulo => replicaTitulo.titulo.toLowerCase() === titulo.toLowerCase())
    ) {
        console.log("Titulo invalido ou ja exite titulo com esse nome, tente novamente.")
        titulo = lT.question("Digite um titulo valido: ")
    }
}



function verfificaDescricaoVazia() {
    while (descricao.length <= 0) {
        console.log("Descricao invalida, tente novamente.")
        descricao = lT.question("Digite uma descricao valida: ")
    }
}

function adicionarTarefa() {
    do {
        titulo = lT.question("Digite o titulo da tarefa: ")

        validaTitulo()

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
    let indice = lT.questionInt("Digite o indice da tarefa que deseja: ")
    while (indice > listaDeTarefas.length || indice <= 0) {
        console.log("Indice invalido.");
        indice = lT.questionInt("Digite um indice valido: ")
    }
    return indice - 1;
}

function visualizarTarefa() {
    let indice = pedirIndice()
    console.log("===================");
    console.log("TITULO:");
    console.log(listaDeTarefas[indice].titulo)
    console.log("===================");
    console.log("DESCRICAO");
    console.log(listaDeTarefas[indice].descricao)
    console.log("===================");
}

function validaTituloDaEdicao(indice) {
    while (tituloNovoQueQuerEditar.length <= 0 ||
        listaDeTarefas.find(
            replicaTitulo => replicaTitulo.titulo.toLowerCase() === tituloNovoQueQuerEditar.toLowerCase())
    ) {
        console.log("Titulo invalido ou ja exite titulo com esse nome, tente novamente.")
        tituloNovoQueQuerEditar = lT.question("Digite um titulo valido: ")
    }
    listaDeTarefas[indice].titulo = tituloNovoQueQuerEditar
}

function editarTarefa() {

    tituloNovoQueQuerEditar = null

    let indice = pedirIndice()
    
    let editarTituloOuDescricao = lT.questionInt(`
    1 - Editar titulo
    2 - Editar descricao
    Digite a opcao que deseja: `)

    while (editarTituloOuDescricao < 1 || editarTituloOuDescricao > 2) {
        console.log("Opcao invalida!");
        editarTituloOuDescricao = lT.questionInt("Digite uma opcao valida: ")
    }

    switch (editarTituloOuDescricao) {
        case 1:
            tituloNovoQueQuerEditar = lT.question("Digite o novo titulo: ")
            validaTituloDaEdicao(indice)
            console.log("Titulo alterado com sucesso.");
            break;

        case 2:
            descricao = lT.question("Digite a nova descricao: ")

            while (descricao.length <= 0) {
                console.log("Descricao invalida, tente novamente.");
                descricao = lT.question("Digite uma descricao valida: ")
            }

            listaDeTarefas[indice].descricao = descricao

            console.log("Descricao alterada com sucesso.");
            break;

        default:
            break;
    }
}

function excluirTarefa() {
    if (listaDeTarefas.length < 1) {
        console.log("Nao ha tarefas para excluir.");
        return;
    }
    console.log("Excluindo tarefas")
    visualizarListaDeTarefas();
    let indice = pedirIndice()

    listaDeTarefas.splice(indice, 1);

    console.log("Tarefa excluida com sucesso!");
}

function filtrarTarefas() {
    if (listaDeTarefas.length < 1) {
        console.log("Nao ha tarefas cadastradas.");
        return;
    }

    let opcao = lT.questionInt(`
1 - Pesquisar por titulo
2 - Pesquisar por descricao
Escolha uma opcao: `);
    
    while (opcao < 1 || opcao > 2) {
        console.log("Opcao invalida.");
        opcao = lT.questionInt("Digite uma opcao valida: ");
    }
    let pesquisa = lT.question("Digite o que deseja pesquisar: ");
    let encontrou = false;
    switch (opcao) {
        case 1:
            for (let i = 0; i < listaDeTarefas.length; i++) {
                if (listaDeTarefas[i].titulo.toLowerCase().includes(pesquisa.toLowerCase())) {
                    console.log(`Tarefa ${i + 1} - ${listaDeTarefas[i].titulo}`);
                    encontrou = true;
                }
            }
            break;

        case 2:
            for (let i = 0; i < listaDeTarefas.length; i++) {
                if (listaDeTarefas[i].descricao.toLowerCase().includes(pesquisa.toLowerCase())) {
                    console.log(`Indice: ${i + 1} | Titulo: ${listaDeTarefas[i].titulo}`);
                    encontrou = true;
                }
            }
            break;
    }
    if (!encontrou) {
        console.log("Nenhuma tarefa encontrada.");
    }
}

function encerrar() {
    console.log("Encerrando o sistema... até logo!");
    sistemaRodando = false;
}

function processarOpcao() {
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
}

while(sistemaRodando) {
    processarOpcao()
}
