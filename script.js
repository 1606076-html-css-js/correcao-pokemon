// Exemplo de evento load da janela
window.addEventListener("load", function() {
    // Ao carregar a janela faço o que está aqui dentro
    console.log("A janela foi carregada com sucesso!")
    console.log("E o evento do botão foi cadastrado!")
    document.getElementById("botaoBusca").addEventListener("click", funcaoPrincipal)

})

async function funcaoPrincipal(){
    // Entradas
    const idPokemon = pegarValueDoInput()
    // Processamento
    const pokemon = await buscarPokemon(idPokemon)
    console.log(pokemon)
    // Saida
    mostrarDadosNaTela(pokemon)
}

function pegarValueDoInput(){
    console.log("Pegando valor do input ...")
    // const valor = document.getElementById("idPokemon").value
    const elementoInput = document.getElementById("idPokemon")
    const valor = elementoInput.value
    
    return valor
}

async function buscarPokemon(codigoPersonagem){
    console.log("Chamando API ...")
    
    const url = `https://pokeapi.co/api/v2/pokemon/${codigoPersonagem}`
    console.log(url)

    const resposta = await fetch(url)
    const pokemon = await resposta.json()

    return pokemon
}

function mostrarDadosNaTela(personagem){
    console.log("Montando a tela com o resultado ...")
    console.log(personagem)
    console.log(personagem.name)
    console.log(personagem.sprites.front_default)

    const containerImagem = document.getElementById("containerImagemPokemon")
    containerImagem.innerHTML = `
        <img src="${personagem.sprites.front_default}">
    `

    const containerNome = document.getElementById("nomePokemon")
    containerNome.innerHTML = personagem.name
}

