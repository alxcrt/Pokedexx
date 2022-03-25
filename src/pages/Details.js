// import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import pokedex from "../data/data.json";
// import { useState } from "react";
import "../components/App/App.css";

export default function PokemonDescription() {
  const { pokeId } = useParams();
  // const [pokemon, setPokemon] = useState(null);

  // useEffect(() => {
  //   const pokemon = pokedex.find((pokemon) => pokemon.id == pokeId);
  //   setPokemon(pokemon);
  // }, []);

  return (
    <div className="App">
      <div className="AppContainer">
        <h1>{pokeId}</h1>
      </div>
    </div>
  );
}
