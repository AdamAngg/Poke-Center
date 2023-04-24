import React from "react";

function PokemonInfo({ name }) {
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
