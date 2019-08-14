import React from "react";

import AddNote from "./../components/AddNote";

function Home() {
  return (
    <div className="App">
      <div className="editor">
        <AddNote />
      </div>
    </div>
  );
}

export default Home;
