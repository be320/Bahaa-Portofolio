import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Project from "./screens/Project";
import { Provider } from "react-redux";
import {store,persistor} from "./redux/redux";
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:id" component={Project} />
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
