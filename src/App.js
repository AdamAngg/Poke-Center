import React from "react";
import { useSelector } from "react-redux";
import "./styles/styles.scss";
import { MainLayout } from "./Pages/MainLayout";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonTable from "./Components/PokemonTable";
import { Navbar } from "./Components/Navbar";

function App() {
  const [filter, filterSet] = React.useState("");
  const currentPokemon = useSelector(
    (state) => state.pokemonReducer.currentPokemon
  );

  return (
    <MainLayout>
      <Navbar />
      <PokemonFilter filter={filter} filterSet={filterSet} />
      <div className="grid">
        <PokemonTable filter={filter} />
        {currentPokemon && <PokemonInfo {...currentPokemon} />}
      </div>
    </MainLayout>
  );
}

export default App;
