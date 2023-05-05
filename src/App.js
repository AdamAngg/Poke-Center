import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import { MainLayout } from "./components/MainLayout";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonList } from "./components/PokemonList";
import { Header } from "./components/Header";

function App() {
  const currentlySelectedPokemon = useSelector(
    (state) => state.pokemonReducer.currentlySelectedPokemon
  );

  return (
    <MainLayout>
      <Header />
      <PokemonList />
      {currentlySelectedPokemon && (
        <PokemonInfo {...currentlySelectedPokemon} />
      )}
    </MainLayout>
  );
}

export default App;
