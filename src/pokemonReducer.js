import { store } from "./store";

const MyInitialState = [];
export const pokemonReducer = (state = MyInitialState, { type, payload }) => {
  switch (type) {
    case "INIT_POKEMON":
      console.log(payload);
      return [...state, payload];
    default:
      return state;
  }
};

export async function fetchPokemon(dispatch, getState) {
  await fetch(`https://pokeapi.co/api/v2/generation/1`)
    .then((response) => response.json())
    .then((data) =>
      store.dispatch({ type: "INIT_POKEMON", payload: data["pokemon_species"] })
    );
}
