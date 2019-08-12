import React, { Component } from "react";
import { db } from "../config/firebase";
import ReactMarkdown from "react-markdown";

function RecentNotes() {
  const [notes, setNotes] = React.useState([]);

  db.collection("notes")
    .where("dateCreated", "<=", Date())
    .limit(100)
    .orderBy("dateCreated", "desc")
    .get()
    .then(snapshot => {
      let dbNotes = [];
      snapshot.forEach(doc => {
        dbNotes.push({ ...doc.data(), id: doc.id });
      });
      setNotes(dbNotes);
    });
  return (
    <div>
      <h3>Recent Notes</h3>
      {notes.map(note => {
        return <Note text={note.text} key={note.id} />;
      })}
    </div>
  );
}

function Note(props) {
  const text = props.text;
  return <ReactMarkdown source={text} />;
}
Note.defaultProps = {
  text: ""
};

export default RecentNotes;
