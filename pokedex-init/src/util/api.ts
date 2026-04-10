const BASE_URL = "https://pokeapi.co/api/v2/";

export async function getPokemonList() {
    return await fetch(BASE_URL + "pokemon");
}