import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../components/App/App.css";
import axios from "axios";

export default function PokemonDescription() {
  const { pokeId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon/" + pokeId);

      setPokemon(result.data);
      setLoading(false);
    };

    fetchData();
  }, [pokeId]);

  return (
    <div className="App">
      <div className="AppContainer">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{pokemon.name}</h1>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
