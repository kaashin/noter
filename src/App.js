import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./pages/Home";
import Reader from "./pages/Reader";

function App({ children }) {
  return (
    <div>
      <h1>Noter</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="reader">Notes by Date</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Home path="/" />
        <Reader path="/reader" />
      </Router>
    </div>
  );
}

export default App;
