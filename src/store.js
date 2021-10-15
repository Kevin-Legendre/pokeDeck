import { pokemonReducer } from "./pokemonReducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(pokemonReducer, composedEnhancer);

store.subscribe(() => {
  console.log(store.getState);
});
