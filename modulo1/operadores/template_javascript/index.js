//1º a. false
    //b. false
    //c. true
    //d. boolean

//2º o sistema apenas juntará os caracteres digitados no prompt, pois são strings.

//3º É necessário usar parseInt(prompt ("Digite um número!"))


let idadeUsu = parseInt(prompt('Qual é sua idade?'))
let idadeAmg = parseInt(prompt('Qual a Idade de seu Melhor Amigo(a)?'))

console.log('Sua idade é maior que a de seu melhor amigo?', idadeUsu > idadeAmg )

console.log('Você é', idadeUsu - idadeAmg, 'anos mais velho que seu melhor amigo.')



let numPar = parseInt(prompt('Digite um número par:'))
    console.log(numPar % 2)
// O resultado sempre será 0
// O resultado sempre será 1



let usuIdade = parseInt(prompt("Qual é sua Idade em Anos?"))
console.log(usuIdade * 12)
console.log(usuIdade * 365)
console.log(usuIdade * 8760)



const primNumb = parseInt(prompt('Digite um número!'))
const secNumb = parseInt(prompt('Digite Outro Número!'))

console.log(primNumb > secNumb)
console.log(primNumb === secNumb)
console.log(primNumb !== secNumb)
console.log(secNumb !== primNumb)