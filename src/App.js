import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import { MainLayout } from "./pages/MainLayout";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonList } from "./components/PokemonList";
import { Header } from "./components/Header";
import { Generations } from "./components/Generations";

export const App = () => {
  const currentlySelectedPokemon = useSelector(
    (state) => state.pokemonReducer.currentlySelectedPokemon
  );

  return (
    <MainLayout>
      <Header />
      <Generations />
      <PokemonList />
      {currentlySelectedPokemon && (
        <PokemonInfo {...currentlySelectedPokemon} />
      )}
    </MainLayout>
  );
};
