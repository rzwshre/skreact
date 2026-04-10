import { useEffect, useState } from "react";
import { PokemonCardProps } from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import { getPokemonList } from "./util/api";

function App() {
  const [pokemon_list, setPokemon_list] = useState<PokemonCardProps[]>([]);


	return <div className="app">
		<h1>Pokedex</h1>
    <SearchBar />
    <PokemonList />
	</div>
}

export default App;
