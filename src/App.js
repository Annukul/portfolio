import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Route path="/" exact render={() => <Home />} />
    </Router>
  );
};

export default App;
