import { pokemonReducer } from "./pokemonReducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(
  pokemonReducer,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => {
  console.log(store.getState());
});
