import { useCallback, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
// import pokedex from "../../data/data.json";
import "./App.css";
import Card from "../Card/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const pokemonsOnPage = 20;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemonData = useCallback(async () => {
    const promiseArr = [];
    for (
      let i = pokemons.length + 1;
      i <= pokemons.length + pokemonsOnPage;
      i++
    ) {
      promiseArr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    const resolvedData = await Promise.all(promiseArr);
    return resolvedData.map((data) => data.data);
  }, [pokemons]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const resp = await fetchPokemonData();
      setPokemons(resp);
      setFilteredPokemon(resp);
      setLoading(false);
    };
    fetchData();

    // Clean up
    return () => {
      setPokemons([]);
      setFilteredPokemon([]);
    };
  }, []);

  window.onscroll = () => {
    if (pokemons.length > 151) {
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchPokemonData().then((newPokemons) => {
        setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
        setFilteredPokemon((prevPokemons) => [...prevPokemons, ...newPokemons]);
      });
    }
  };

  const handleSearch = (searchTerm) => {
    // Search by name,id, type
    const filteredPokemon = pokemons.filter((pokemon) => {
      for (const type of pokemon.types) {
        if (
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pokemon.id.toString().includes(searchTerm) ||
          type.type.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    setFilteredPokemon(filteredPokemon);
  };

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="AppHeader">
          <Link to="/">
            <h1>Pokedex</h1>
          </Link>

          <SearchBar onSearch={handleSearch} />
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div id="pokedex">
            {filteredPokemon.map((pokemon) => {
              return <Card key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
