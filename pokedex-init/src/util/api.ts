const BASE_URL = "https://pokeapi.co/api/v2";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonResult {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[]
}

export async function getPokemonList() : Promise<PokemonResult[]> {
    const res = await fetch(BASE_URL + "/pokemon");
    if (!res.ok) return [];
    const json = await res.json();
    return json;
}

export async function getPokemonDetailsByUrl(url: string) {
    const res = await fetch(url);
    if (!res.ok) return [];
    const json = await res.json();
    return json;
}

export async function getPokemonDetailsById(id: string) {
    const res = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!res.ok) return [];
    const json = await res.json();
    return json;
}