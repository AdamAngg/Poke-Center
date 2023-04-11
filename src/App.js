import React from "react";
import "./styles/styles.scss";
import pokemon from "./pokemon.json";

const PokemnonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join("/")}</td>
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

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div style={{ margin: "auto", width: 800, padding: "1rem" }}>
      <h1 className="title">Pokemon search</h1>
      <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
      <div>
        <table width={"100%"}>
          <RowTitle />
          <tbody>
            {pokemon
              .filter((pokemon) => pokemon.name.english.includes(filter))
              .slice(0, 20)
              .map((pokemon) => (
                <PokemnonRow pokemon={pokemon} key={pokemon.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
