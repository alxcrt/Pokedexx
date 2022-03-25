import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../components/App/App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PokemonDescription() {
  const { pokeId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const primaryType = pokemon && pokemon.types[0].type.name;

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
        <Link to="/">
          <div className="AppHeader">
            <h1>Pokedex</h1>
          </div>
        </Link>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="pokemon-content">
            <div className="pokemon-content-upper">
              <div className={`card-container ${primaryType}`}>
                <div className="pokemon-artwork-card">
                  <div className="pokemon-artwork-card-header">
                    <div className="pokemon-id-info">
                      <h1>
                        {pokemon.name.charAt(0).toUpperCase() +
                          pokemon.name.slice(1)}
                      </h1>
                      <p>{"#" + pokeId.padStart(3, "0")}</p>
                    </div>

                    <div className="pokemon-types-container">
                      {pokemon.types.map((type) => (
                        <div
                          className="type-card-container"
                          key={type.type.name}
                        >
                          <p>
                            {type.type.name.charAt(0).toUpperCase() +
                              type.type.name.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt=""
                />

                <div className="pokemon-info-container">
                  <p>Weight : {pokemon.weight} kg</p>
                  <p>Height : {pokemon.height} meters</p>
                </div>
              </div>

              <div className="pokemon-trivia-container">
                <h1>Description</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil consectetur ducimus sapiente rem nemo expedita eius
                  dolorum eum, nostrum laudantium veritatis quidem dolores
                  numquam optio blanditiis vero molestiae quis. Repellat!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
