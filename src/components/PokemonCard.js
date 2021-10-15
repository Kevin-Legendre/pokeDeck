import React from "react";

export function PokemonCard({ pokemon: {id, name, img, type} }) {

  const colorType = (type) => {
    switch (type) {
      case "normal":
        return "#A8A77A";
      case "fire":
        return "#EE8130";
      case "water":
        return "#6390F0";
      case "electric":
        return "#F7D02C";
      case "grass":
        return "#7AC74C";
      case "ice":
        return "#96D9D6";
      case "fighting":
        return "#C22E28";
      case "poison":
        return "#A33EA1";
      case "ground":
        return "#E2BF65";
      case "flying":
        return "#A98FF3";
      case "psychic":
        return "#F95587";
      case "bug":
        return "#A6B91A";
      case "rock":
        return "#B6A136";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6F35FC";
      case "dark":
        return "#705746";
      case "steel":
        return "#B7B7CE";
      case "fairy":
        return "#D685AD";
      default:
        return "#FFFFFF";
    }
  };

  let style = {
    'backgroundColor': colorType(type)
  }

  const formatedName = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  }
  return (
    <div className="pokemon-card" style={style}>
      <a href={`/pokemon/${id}`} className="pokemon-card-img">
        <img src={img} alt={name} />
      </a>
      <p className="pokemon-card-name">Name: {formatedName(name)}</p>
      <p className="pokemon-card-type">Type: {formatedName(type)}</p>
    </div>
  );
}
