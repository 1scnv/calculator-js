const prompt = require("prompt-sync")({ sigint: true });

function incremento(result, tipo=1){
    do{
        console.log("Novo Calculo?\n1- Sim\n2- Nao")
        opcao = (prompt("> "))
        
        switch(opcao){
        case "1":
            console.log(`Numero a ser calculado junto de ${result}:`)
            numC = Number(prompt("> "))
            if(tipo===1){
                soma(result,numC)
            }else if(tipo===2){
                subtracao(result,numC)
            }else{
                menu()
            }
            break
        case "2":
            menu()
            break
        default :
            console.log("Opcao Invalida")
        }
    }while(opcao != "2")
}

function soma(A=0, B=0){

    if(A>0 && B>0){
        let result = A + B
        console.log(result)
        incremento(result)
    }else{
        console.log("Informe dois números para o cálculo: ")
        let numA = Number(prompt("Número A: "))
        let numB = Number(prompt("Número B: "))
        let result = numA + numB
        console.log(result)
        incremento(result,1)
    }
}

function multiplicacao(){
    console.log("Informe dois números para o cálculo: ")
    let numA = Number(prompt("Número A: "))
    let numB = Number(prompt("Número B: "))
    const result = numA * numB
    console.log(result)
}

function divisao(){
    console.log("Informe dois números para o cálculo: ")
    let numA = Number(prompt("Número A: "))
    let numB = Number(prompt("Número B: "))
    const result = numA / numB
    console.log(result)
}

function subtracao(A=0, B=0){
    if(A>0 && B>0){
        let result = A - B
        console.log(result)
        incremento(result,2)
    }else{
        console.log("Informe dois números para o cálculo: ")
        let numA = Number(prompt("Número A: "))
        let numB = Number(prompt("Número B: "))
        let result = numA - numB
        console.log(result)
        incremento(result,2)
    }
}

function stop(){
    console.log("Encerrando a calculadora")
}

function menu(){
    let opcao
    do{
        console.log("Bem-vindo a Calculadora. Qual calculo gostaria de fazer?\n1- Soma\n2- Subtracao\n3- Multiplicacao\n4- Divisao\n5- Sair")
        opcao = (prompt("> "))

        switch(opcao){
            case "1":
                soma()
                break
            case "2":
                subtracao()
                break   
            case "3":
                multiplicacao()
                break
            case "4":
                divisao()
                break
            case "5":
                stop()
                break
            default:
                console.log("Opcao invalida!")                                
        }
    }while(opcao != "5")
}

menu()