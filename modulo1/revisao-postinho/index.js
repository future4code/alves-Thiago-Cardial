
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarIgualdade(8,8))
// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b){
    return `O parâmetro ${a} é maior que o parâmetro ${b}? ${a > b}`
}
console.log(verificaSeEMaior(321, 2156));

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []
    idade = prompt('Digite sua idade')
    nomUser = prompt('Digite um usuário')
    senhaUser =  prompt('Digite uma senha')
    nacioUser = prompt('Digite sua nacionalidade')
    if (idade >= 18){
    if (senhaUser.length >= 6){
    if (nacioUser === 'Brasil'){
        console.log('Cadastrado com sucesso!')
    }
    else {
        console.log ('Falha ao cadastrar')
    }
    }
    else {
        console.log ('Falha ao cadastrar')
    }
    }
    else {
        console.log ('Falha ao cadastrar')
    }
}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    let senha = prompt('Digite sua senha.')
    if (senha === senhaUser){
        console.log('Usuário Logado!')
    }
    else {
        console.log('Senha inválida')
    }
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    newNom = prompt ('Qual é seu nome?')
    vacUser = prompt ('Qual vacina você tomou?')
    let tempo = [
        {Coronavac: '28'},
        {Astrazenica: '90'},
        {Pfizer: '90'},
    ]
    const data = [
       {coroData: '29/08/2022'},
       {astraData:'30/10/2022'},
       {pfiData: '30/10/2022'},
    ]
    if (vacUser === 'Coronavac'){
        console.log(`Olá ${newNom}! A próxima dose da ${vacUser} é daqui a ${tempo.vacUser} dias. Compareça no posto na data`)
    }


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());