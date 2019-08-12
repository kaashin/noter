import React from "react";

function ReadNotes(props) {
  let [sortBy, setSortBy] = React.useState("");

  return (
    <div>
      <h3>Read Notes</h3>
      {sortBy === "date" ? <h4>By Date</h4> : ""}
    </div>
  );
}

export default ReadNotes;
