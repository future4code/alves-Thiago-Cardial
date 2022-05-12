//1º a.20 50
  //b. nada

//2º a.Converte o texto em minúsculo e verifica se existe a palavra cenoura.
    //b.
      //i.true
      //ii.false
      //iii.false

function noPar(){
    return 'Eu sou Thiago, tenho 20 anos, moro na Bahia e sou estudante'
}

console.log(noPar())
//
//
//
function perG(cartas){
    string1 = prompt('Qual é seu nome?')
    numb1 = prompt('Qual é sua idade?')
    string2 = prompt('Qual cidade você mora?')
    string3 = prompt('Qual profissão você exerce?')
    
    console.log (`Eu sou ${string1}, tenho ${numb1} anos, moro em ${string2} e sou ${string3} `)
return cartas
}
console.log(perG())
//
//
//
function numCal(nu1, nu2){
    nu1 = 5
    nu2 = 8
    return nu1 + nu2
}

console.log(numCal())
//
//
//
function boolNum(nb1, nb2){
    nb1 = prompt("Digite um número")
    nb2 = prompt("Digite outro Número.")
    return nb1 >= nb2
}
console.log(boolNum())
//
//
//
function parNum (n1){
n1 = prompt('Digite um número Par.')
return (n1 % 2) === 0
}
console.log(parNum())
//
//
//
function palaPara(){
    porta = prompt('Escreva uma mensagem')
    porta2 = porta.length
    porta3 = porta.toUpperCase()
    return porta2, porta3

}
console.log(palaPara())
//
//

function operaNum(){
   num1 = parseInt(prompt('Digite um número para a operação.'))
   num2  = parseInt(prompt('Digite outro número'))

   return `Números inseridos: ${num1} e ${num2}
   Soma: ${num1 + num2}
   Diferença: ${num1 - num2}
   Multiplicação: ${num1 * num2}
   Divisão: ${num1 / num2}`
}
console.log(operaNum())
//
//
//
