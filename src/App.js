import React from "react";
import "./styles/styles.scss";

import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((resp) =>
      resp.json().then((data) => pokemonSet(data.results))
    );
  }, []);

  return (
    <div className="section">
      <h1 className="title">Pokemon search</h1>
      <PokemonFilter filter={filter} filterSet={filterSet} />
      <div className="grid">
        <PokemonTable
          filter={filter}
          pokemon={pokemon}
          selectedItemSet={selectedItemSet}
        />
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
