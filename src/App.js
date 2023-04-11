import "./App.css";
import pokemon from "./pokemon.json";

const PokemnonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join("/")}</td>
  </tr>
);

function App() {
  return (
    <div style={{ margin: "auto", width: 800, padding: "1rem" }}>
      <h1 className="title">Pokemon search</h1>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 20).map((pokemon) => (
            <PokemnonRow pokemon={pokemon} key={pokemon.id} />
          ))}
        </tbody>
      </table>
      ;
    </div>
  );
}

export default App;
