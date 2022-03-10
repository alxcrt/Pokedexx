import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import pokedex from "../../data/data.json";
import "./App.css";
import Card from "../Card/Card";

function App() {
  const [filteredPokemon, setFilteredPokemon] = useState(pokedex);

  const handleSearch = (searchTerm) => {
    // Search by name,id, type
    const filteredPokemon = pokedex.filter((pokemon) => {
      for (const type of pokemon.types) {
        if (
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pokemon.id.toString().includes(searchTerm) ||
          type.type.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
      }
    });

    setFilteredPokemon(filteredPokemon);
  };

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="AppHeader">
          <h1>Pokedex</h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div id="pokedex">
          {filteredPokemon.map((pokemon) => {
            return <Card key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
