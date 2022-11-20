
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limite = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}0&limit=${limite}`

    return fetch(url)
        .then((response) => response.json())
        .then((jasonBody) => jasonBody.results)
        .catch((error) => console.error(error))
}