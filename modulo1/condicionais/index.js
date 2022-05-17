//1º O código identifica se o número digitado pelo usuário, quando dividido por dois, restará 0.
//b) números pares.
//c) números ímpares.

//2º para informar ao cliente o valor da fruta escolhida.
//b) "O preço da fruta Maça é R$ 2.25".
//c) "O preço da fruta Pêra é R$ 5".

//3º solicitando ao usuário que digite um número e convertendo essa resposta para Number.
//b) "Esse número passou no teste; Nada."
//c) sim, 

//const numero = Number(prompt("Digite o primeiro número."))

//if(numero > 0) {
//  console.log("Esse número passou no teste") 
//  let mensagem = "Essa mensagem é secreta!!!"
  //'mensagem'não está declarado na condicional pois o console.log abaixo não está dentro da condição.
//}
//console.log(mensagem)

const idadeDir = Number(prompt("Digite sua Idade"))

if(idadeDir >= 18) {
  console.log('Você pode Dirigir.' )
}
 else{
   console.log('Você não pode dirigir.')
 }
//
//
//
const turnoEst = prompt("Qual turno você estuda? (responda com M, V, ou N).")
if (turnoEst === 'M'){
  console.log('Bom Dia!')
}
if (turnoEst === 'V'){
  console.log('Boa Tarde!')
}
if(turnoEst === 'N')
  console.log('Boa Noite!')
//
//
//
switch (turnoEst){
   case 'M':
     msg = "Bom dia!"
     break;
  case 'V':
    msg = 'Boa tarde!'
    break;
  case 'N':
    msg = 'Boa Noite!'
    break;

}
console.log(msg)
//
//
let  genFilm = prompt('Qual gênero do filme você quer assistir?')
let precFilm = Number(prompt('Qual é o valor do ingresso para esse filme?'))

if (genFilm === 'fantasia') {
  precFilm <= 15
  console.log('Bom Filme!')
}
else console.log ("Escolha outro filme :(")