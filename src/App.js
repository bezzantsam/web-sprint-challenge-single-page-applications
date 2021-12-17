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
          <Link id="order-pizza" to="/pizza">
            {" "}
            Pizza
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza/confirm">
          <Confirm />
        </Route>

        <Route path="/help">
          <Help />
        </Route>

        <Route path="/pizza">
          <Shop />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
