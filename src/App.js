import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/homepage";
import Help from "./components/Help";
import Shop from "./components/Shop";
import Confirm from "./components/Confirm";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="bloomtech-pizza">Bloomtech Pizza</h1>
        <p className="nom">Num Num Num</p>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link to="/order-pizza">Pizza</Link>
        </div>
      </nav>
    </div>
  );
};
export default App;
