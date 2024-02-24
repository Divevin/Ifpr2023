const Animal ={
    //atributos do objeto -- CHAVE : VALOR
    nome: "lulu",
    tamanho: "mini",
    raca: "Pit Monster",
    cor: 'bege',
    idade: 2
} //fim deste objeto

let tela = document.getElementById('tela')

//com este comando é exibido todos os atributos do objeto
tela.innerHTML = JSON.stringify(Animal, null, 1)

//OBTENDO APENAS UM ATRIBUDO ESPECIFICO DE UM OBJETO
tela.innerHTML = Animal.cor

//DESESTRUTURAÇÃO DE OBJETO
const {nome, idade} = Animal

// na utilização do ?? ou // seria como se fosse um If, se for verdadeiro faça isso se não for faça aquilo
// --o ?? é considera ''Verdadeiro'' atributos com Valores = a 0 ou Vazio, por exemplo o Valor 0 Seria considerado verdadeiro
// --o // considera todos os valores diferentes do que se pede como Problemas, por exemplo o valor = seria interpretado como Falso
tela.innerHTML = `Nome: ${nome} Idade: ${(idade ?? 'Não informado')}`


//REST OPERATOR
//utilizando o rest operator ... para armazenar todos os dados que sobraram alem em uma unica variavel, sendo definida as principais antes do ...
const mostraTexto = (nome, ...brinquedos) => {
    let texto = `O animal ${nome} gosta dos brinquedos: `

    //criando a variavel que armazenara os brinquedos
    let texto_brinquedos = ''
    //criando a função que armazena todos os valores colocados nos brinquedos utilizando for each
    brinquedos.forEach(e => {
        texto_brinquedos += ` ${e} `
    });

    texto += texto_brinquedos
    return texto
}

function ativaTexto(){
    let tela = document.getElementById('tela')

    tela.innerText = mostraTexto('totó', 'bolinha', 'corda', 'osso')
}