//1. 10 
//  10 5
  
//2. 10 10 10

//3. horaDiaTrab   cacheDiaTrab


var nomeUsu = undefined
let idadeUsu = null
console.log (typeof nomeUsu, idadeUsu)
//os tipos são indefinidos, pois um valor ainda não foi atribuído

nomeUsu = prompt ("Qual é seu nome?")
idadeUsu = prompt("Qual sua idade?")

console.log(nomeUsu, idadeUsu)
// as duas variáveis tiveram seus tipos definidos, agora que seus valores foram atribuídos.
console.log(`Olá ${nomeUsu}, você tem ${idadeUsu} anos.`)

var camisa = prompt ("Você está usando camisa hoje?")
var maiorId = prompt ("Você é maior de Idade?")
var animalEst = prompt ("Você tem animais de estimação?")

console.log("Você está usando camisa hoje? -",camisa)
console.log ("Você é maior de Idade? -",maiorId)
console.log("Você tem animais de estimação? -",animalEst)

let a = 10
let b = 25

c = b
b = a
a = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10