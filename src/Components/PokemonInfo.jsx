import React, { useState } from "react";

function PokemonInfo({ name, url }) {
  const [pokemonData, PokemonDataSet] = useState([]);

  React.useEffect(() => {
    fetch(url).then((resp) => resp.json().then((data) => PokemonDataSet(data)));
  }, []);
  console.log(pokemonData.types);

  const capitalizeWord = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div>
      <h1>{capitalizeWord(name)}</h1>
    </div>
  );
}
export default PokemonInfo;
