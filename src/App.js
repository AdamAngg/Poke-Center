import React from "react";
import { useEffect } from "react";
import "./styles/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "./store/pokemonSlice";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedItem, selectedItemSet] = React.useState(null);

  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemon);
  }, []);
  console.log(pokemon);

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
