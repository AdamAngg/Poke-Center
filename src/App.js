import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import { MainLayout } from "./components/MainLayout";
import { PokemonFilter } from "./components/PokemonFilter";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonList } from "./components/PokemonList";

function App() {
  const currentPokemon = useSelector(
    (state) => state.pokemonReducer.currentPokemon
  );

  return (
    <MainLayout>
      <PokemonFilter />
      <PokemonList />
      {currentPokemon && <PokemonInfo {...currentPokemon} />}
    </MainLayout>
  );
}

export default App;
