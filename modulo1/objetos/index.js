//1º Matheus Nachtergaele
   //Virginia Cavendish
   // canal:Globo horário:14h

// 2º nome:Juca idade:3 raça:SRD
   //nome:Juba idade:3 raça:SRD
   //nome:Jubo idade:3 raça:SRD
   //b) as reticências copiam o objeto anterior e todos os seus parâmetros.

// 3º false; undefined
  //b) o segundo valor resultou undefined pois o parâmetro 'altura' não existe dentro do objeto.

  const nomAp = {
      nome: 'Luiza',
      apelidos: ['Lu',' Lua',' Iza'],
  }

  console.log(`Eu sou ${nomAp.nome}, mas pode me chamar de:${nomAp.apelidos}`)

  novoNomAp = {...nomAp, apelidos: ['Lulu', 'Luza', 'Lui']}

  console.log(novoNomAp)

const profID = {
    nome:'Pedro',
    idade: 23,
    profissao:'vendedor'
}

const profID2 = {
    nome:'Lucas',
    idade: 25,
    profissao:'lutador'
}

function makeIt(){
   console.log(profID.nome, profID.nome.length, profID.idade, profID.profissao, profID.profissao.length)
   console.log(profID2.nome, profID2.nome.length, profID2.idade, profID2.profissao, profID2.profissao.length)
}
makeIt()

let carrinho = []

const macFru ={
    nome:'Maçã',
    disponibilidade:true
}
const lajFru ={
    nome:'laranja',
    disponibilidade:true
}
const banFru = {
    nome:'banana',
    disponibilidade: true
}

carrinho.push(lajFru, macFru, banFru)

console.log(carrinho)