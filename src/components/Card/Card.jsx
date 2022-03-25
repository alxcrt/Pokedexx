import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, types, id, sprites } = props.pokemon;

  let cardColor = "";
  const primaryType = types[0].type.name.toLowerCase();

  switch (primaryType) {
    case "fire":
      cardColor = "--fire-red";
      break;
    case "grass":
      cardColor = "--grass-green";
      break;
    case "water":
      cardColor = "--water-blue";
      break;
    case "electric":
      cardColor = "--electric-yellow";
      break;
    case "normal":
      cardColor = "--normal-gray";
      break;
    case "ghost":
      cardColor = "--ghost-purple";
      break;
    case "psychic":
      cardColor = "--psychic-purple";
      break;
    case "rock":
      cardColor = "--rock-gray";
      break;
    case "ground":
      cardColor = "--ground-brown";
      break;
    case "bug":
      cardColor = "--bug-green";
      break;
    case "poison":
      cardColor = "--poison-purple";
      break;
    case "fairy":
      cardColor = "--fairy-pink";
      break;
    case "fighting":
      cardColor = "--fighting-brown";
      break;
    case "ice":
      cardColor = "--ice-blue";
      break;
    case "dragon":
      cardColor = "--dragon-green";
      break;

    default:
      cardColor = "";
  }

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="card" style={{ background: `var(${cardColor})` }}>
        <div className="header">
          <p>{name[0].toUpperCase() + name.slice(1)}</p>
          <p>#{id.toString().padStart(3, "0")}</p>
        </div>

        <div className="body">
          <div className="types">
            {types.map((type) => (
              <p key={type.type.name}>
                {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
              </p>
            ))}
          </div>
          <img src={sprites.other["official-artwork"].front_default} alt="" />
        </div>
      </div>
    </Link>
  );
}
