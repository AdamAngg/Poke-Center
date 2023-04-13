import React from "react";
import "./styles/styles.scss";

import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";
import PokemonContext from "./Components/PokemonContext";

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json").then((resp) =>
      resp.json().then((data) => pokemonSet(data))
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
        <PokemonInfo {...selectedItem} />
      </div>
    </div>
  );
}

export default App;
