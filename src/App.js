import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import { MainLayout } from "./pages/MainLayout";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonList } from "./components/PokemonList";
import { Header } from "./components/Header";
import { Generations } from "./components/Generations";
import { Error } from "./components/Error";

export const App = () => {
  const currentlySelectedPokemon = useSelector(
    (state) => state.pokemonReducer.currentlySelectedPokemon
  );
  const currentlySelectedPokemonExtendedInfo = useSelector(
    (state) => state.pokemonReducer.currentlySelectedPokemonExtendedInfo
  );
  console.log(currentlySelectedPokemon);

  return (
    <MainLayout>
      <Header />
      <Generations />
      <PokemonList />
      {!currentlySelectedPokemon ? (
        <Error
          ErrorMsg="Try and search more information about your pokemon!"
          ErrorIcon="happy-outline"
        />
      ) : (
        ""
      )}
      {currentlySelectedPokemon && (
        <PokemonInfo
          {...currentlySelectedPokemon}
          extendedInfoArray={currentlySelectedPokemonExtendedInfo}
        />
      )}
    </MainLayout>
  );
};
