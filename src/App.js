import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import { MainLayout } from "./Pages/MainLayout";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";

function App() {
  const currentPokemon = useSelector(
    (state) => state.pokemonReducer.currentPokemon
  );

  return (
    <MainLayout>
      <PokemonFilter />
      <PokemonTable />
      {currentPokemon && <PokemonInfo {...currentPokemon} />}
    </MainLayout>
  );
}

export default App;
