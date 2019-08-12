import React from "react";
import AddNote from "./components/AddNote";

function App() {
  return (
    <div className="App">
      <h1>Noter</h1>
      <div id="menu">
        <ul>
          <li>Notes by Date</li>
        </ul>
      </div>
      <div className="editor">
        <AddNote />
      </div>
    </div>
  );
}

export default App;
