import { useState } from "react";
import { PokemonCardProps } from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

function App() {
  // state to hold the value of the data you fetch from the API
  const [pokemon_list, setPokemon_list] = useState<PokemonCardProps[]>([]);

  // TODO: make use of useEffect hook to call the API and fetch data here, and set the data in the pokemon_list state variable

	return <div className="app">
		<h1>Pokedex</h1>
    <SearchBar />
    <PokemonList />
	</div>
}

export default App;
