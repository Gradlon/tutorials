// AddItem.js

import React, { Component } from 'react';
import ItemService from './ItemService';
import {Link} from 'react-router-dom';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class AddItem extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.addItemService = new ItemService();

      this.state = {
      editorState: EditorState.createEmpty(),
    };
    onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.addItemService.sendData(this.state.value);
      this.props.history.push('/index');
    }

    render() {
      return (
        <div className="container">
        <Link to={"/index/"} className="btn btn-primary">Index</Link>
          <form onSubmit={this.handleSubmit}>
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
            <label>
              Add Item:

              <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>

            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
      </div>
      );
    }
  }

export default AddItem;
