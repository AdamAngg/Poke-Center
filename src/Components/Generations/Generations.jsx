import { GenerationButton } from "./GenerationButton";
export const Generations = () => {
  const pokemonGenerationsUrl = {
    Generation1: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
    Generation2: "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151",
    Generation3: "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251",
    Generation4: "https://pokeapi.co/api/v2/pokemon?limit=108&offset=386",
  };
  return (
    <div className="generations-container">
      {Object.entries(pokemonGenerationsUrl).map(([key, value], id) => (
        <GenerationButton key={key} name={key} value={value} id={id + 1} />
      ))}
    </div>
  );
};
