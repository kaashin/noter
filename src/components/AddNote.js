import React, { Component } from "react";
import { db } from "../config/firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

function AddNote() {
  const [inputText, setInputText] = React.useState("");
  return (
    <div>
      <form>
        <div style={{ border: "solid 1px blue" }}>
          <Editor
            value={inputText}
            onValueChange={code => setInputText(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12
            }}
          />
        </div>
        <Button
          color="primary"
          size="medium"
          variant="contained"
          onClick={() => {
            db.collection("notes")
              .add({
                text: inputText,
                dateCreated: Date()
              })
              .then(docRef => {
                setInputText("");
                console.log(`Document written with ID: ${docRef.id}`);
              })
              .catch(error => {
                console.error(`Error adding document: ${error}`);
              });
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddNote;
