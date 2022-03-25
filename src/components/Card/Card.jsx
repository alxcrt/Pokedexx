import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, types, id, sprites } = props.pokemon;

  const primaryType = types[0].type.name.toLowerCase();

  return (
    <Link to={`/pokemon/${id}`}>
      <div className={`card ${primaryType}`}>
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
