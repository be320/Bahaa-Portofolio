import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
