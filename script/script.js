function pokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <p class="numero">#${pokemon.number}</p>
            <p class="nome">${pokemon.name}</p>
            <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
        `
}
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemonListJson = []) => {
    const newHtml = pokemonListJson.map(pokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})