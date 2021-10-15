import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Pokemon } from "./components/Pokemon";

const ROUTES = [
  { path: "/", component: Home },
  { path: "/pokemon/:id", component: Pokemon },
];

function App() {
  return (
    <Router>
      <div className="container">
        <h1><a href="/">PokeDeck</a></h1>
        <Switch>
          {ROUTES.map((item, i) => {
            if (item.component === Home) {
              return (
                <Route
                  key={i}
                  exact
                  path={item.path}
                  component={item.component}
                />
              );
            }
            return (
              <Route key={i} path={item.path} component={item.component} />
            );
          })}
        </Switch>
      </div>
    </Router>
  );

// import logo from './logo.svg';
import "./App.css";

function App() {
  return <div></div>;
}

export default App;
