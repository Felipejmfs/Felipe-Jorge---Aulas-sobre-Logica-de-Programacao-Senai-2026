const lerTeclado = require('readline-sync')

let operacaoSecundaria = null
let numerosOperados = []
let localizador = 0

do {
    console.log("1 – Somar | 2 – Subtrair | 3 – Multiplicar | 4 – Dividir | 5 – Zerar | 6 - Resultado")

    if (operacao == 5) {
            resultado = 0
            console.log("Resultado zerado.")
            continue
      } else {
            operacaoSecundaria = lerTeclado.questionInt(`Digite a operação: `)
            numerosOperados.push(lerTeclado.questionInt(`Digite o número que quer operar: `))
      }

    switch (operacaoSecundaria) {
        case 1:
          resultado += numerosOperados[localizador]
          break;
    
        case 2:
        resultado -= numerosOperados[localizador]
          break;
    
        case 3:
        resultado *= numerosOperados[localizador]
          break;
    
        case 4:
          if(numerosOperados[localizador] == 0) {
            console.log("Divisão inválida")
            process.exit()
          } else {
            resultado /= numerosOperados[localizador]
          }
          break;
        }

        localizador++
} while (operacaoSecundaria !== 6);