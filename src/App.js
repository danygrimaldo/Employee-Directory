import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/directory";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Directory} />
      </div>
    </Router>
  );
}

export default App;
