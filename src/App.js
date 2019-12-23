import React, { Component } from 'react';
import AceEditor from "react-ace";
import './App.css';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default class App extends Component{
  state = { 
    name: null
  } 
  handleClick = () => {
    console.log(this.refs.aceEditor.editor.getValue());
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sent => ' + this.refs.aceEditor.editor.getValue())
    const url ='http://webhook.site/fe25ea0d-0feb-4e38-8b58-d366c8c4dd03'
    const data = { 
      codes: this.refs.aceEditor.editor.getValue()
    }
    fetch(url, { 
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers:{ 
        'Content-Type': 'application/json',
        'Content-type': 'application/json' 
      } 
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <AceEditor
          name="name"
          mode="javascript"
          theme="monokai"
          ref="aceEditor"
          width="700px"
          height="700px"
          editorProps={{
              $blockScrolling: true
          }}/>
        <input type='submit' value='Submit Codes' /> 
      </form>
    )
  }
}

