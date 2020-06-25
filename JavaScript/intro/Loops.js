console.log("Trabalhando com loops! -->>LOOP INFINITO")

const idaddeComprador = 15
let passagem = false

const destinos = new Array('Salvador', 'São Paulo', 'Rio de Janeiro')
destinos.push('Foz do Iguaçu', 'Itaipulandia')//o push adiciona item na lista
destinos.splice(1, 1)//splice remove um elemento da lista splice(posição do(s) elemento(s), quantidade de elementos)
console.log(`Nossas opções de viagens são: ${destinos} `)
console.log(destinos[1])//exibe o valor do elemento na posição 1

while(!passagem){
    if(idaddeComprador >= 18) {
        console.log('Então, bora escolher o seu destino??')
        passagem = true
    } else {
        console.log('Infelizmente, caso você não esteja com um responsável, te espero daqui alguns anos para escolhermos o seu destino :)')
        break
    }
}