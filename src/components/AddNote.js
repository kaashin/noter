import React, { Component } from "react";
import { db } from "../config/config";
import EditorJs from "react-editor-js";
import Button from "@material-ui/core/Button";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: {}
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  componentDidMount() {
    console.log(this.editorInstance);
  }
  async handleSave() {
    const savedData = await this.editorInstance.save();

    // Save to DB
    savedData.blocks.forEach((block, index) => {
      db.collection("note-blocks").add({
        data: block.data,
        time: Date(savedData.time)
      });
    });
    //Clear he editor
    this.editorInstance.clear();
  }
  async handleCheck() {
    console.log(this.editorInstance);
  }
  render() {
    return (
      <div>
        <form>
          <div style={{ border: "solid 1px blue" }}>
            <EditorJs
              instanceRef={instance => (this.editorInstance = instance)}
              data={this.state.inputData}
            />
          </div>
          <Button
            color="primary"
            size="medium"
            variant="contained"
            onClick={this.handleSave}
          >
            Add
          </Button>
          <Button color="secondary" size="medium" onClick={this.handleCheck}>
            Check
          </Button>
        </form>
      </div>
    );
  }
}

export default AddNote;
