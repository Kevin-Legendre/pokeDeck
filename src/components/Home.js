import React from "react";
import { PokemonCard } from ".";

export function Home() {
  const pokemons = [
    {
      id: 1,
      name: "bulbasaur", 
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type:"grass"
    },
    {
      id: 2,
      name: "ivysaur", 
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      type:"grass"
    },
    {
      id: 3,
      name: "venusaur", 
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      type:"grass"
    },
    {
      id: 4,
      name: "charmander", 
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      type: "fire"
    },
    {
      id: 5,
      name: "charmeleon", 
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      type: "fire"
    },
    {
      id: 6,
      name: "charizard", 
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      type: "fire"
    },
  ]


  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, i) => {
        console.log(pokemon);
        return <PokemonCard key={i} pokemon={pokemon} />;
      })}
    </div>
  );
}
