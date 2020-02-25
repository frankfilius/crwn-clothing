import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
