import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
