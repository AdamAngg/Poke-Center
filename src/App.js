import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";

import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";

function App() {
  const [filter, filterSet] = React.useState("");
  const currentPokemon = useSelector(
    (state) => state.pokemonReducer.currentPokemon
  );

  return (
    <div className="main">
      <h1 className="title">Pokemon search</h1>
      <PokemonFilter filter={filter} filterSet={filterSet} />
      <div className="grid">
        <PokemonTable filter={filter} />
        {currentPokemon && <PokemonInfo {...currentPokemon} />}
      </div>
    </div>
  );
}

export default App;
