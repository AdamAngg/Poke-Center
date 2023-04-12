import React from "react";
import "./styles/styles.scss";
import LoadingSpinner from "./Components/Spinner";

const PokemnonRow = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join("/")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select</button>
    </td>
  </tr>
);
const RowTitle = () => (
  <thead>
    <tr>
      <th>Pokemon</th>
      <th>Type</th>
    </tr>
  </thead>
);
const PokemonInfo = ({ name: { english }, base }) => (
  <div>
    <h1>{english}</h1>
    {Object.keys(base).map((e) => (
      <p key={e}>
        {e}: {base[e]}
      </p>
    ))}
  </div>
);
const spinner = () => (
  <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>
);

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, selectedItemSet] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  return (
    <div className="section">
      <h1 className="title">Pokemon search</h1>
      <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />

      <div className="grid">
        <div>
          <table width={"100%"}>
            <RowTitle />
            <tbody>
              {pokemon
                .filter((pokemon) =>
                  pokemon.name.english.toLowerCase().includes(filter)
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemnonRow
                    pokemon={pokemon}
                    key={pokemon.id}
                    onSelect={(pokemon) => selectedItemSet(pokemon)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
