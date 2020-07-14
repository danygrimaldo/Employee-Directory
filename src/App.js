import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import directory from "./pages/directory";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={directory} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
