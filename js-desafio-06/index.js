//soma
function somar(numero1, numero2){
    let soma = numero1 + numero2; 
    return 'A soma dos dois números é: ' + soma;
}
const funcaoSoma = somar(1, 2)
console.log(funcaoSoma)

//multiplicacao
function multiplicar(numero1, numero2){
    let multiplicacao = numero1 * numero2; 
    return 'A multiplicação dos dois números é: ' + multiplicacao;
}
const funcaoMultiplicacao = multiplicar(5, 2)
console.log(funcaoMultiplicacao)

//divisao
function dividir(numero1, numero2){
    let divisao = numero1 / numero2; 
    return 'A divisão dos dois numeros é: ' + divisao;
}
let funcaoDivisao = dividir(10, 2)
console.log(funcaoDivisao)

//subtracao
function subtrair(numero1, numero2){
    let subtrair = numero1 - numero2;
    return 'A subtração dos dois numeros é: ' + subtrair;
}
const funcaoSubtracao = subtrair(10, 5)
console.log(funcaoSubtracao)

//Resto da divisao, só pra treinar 
function restoDaDivisao(numero1, numero2){
    let restoDaDivisao = numero1 % numero2;
    return 'O resto da divisão dos dois numeros é: ' + restoDaDivisao;
}
const oQueSobrou = restoDaDivisao(14, 5)
console.log(oQueSobrou)