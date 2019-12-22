import React, { Component } from 'react';
import AceEditor from "react-ace";
import './App.css';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

export default class App extends Component{
  state = { 
    codes: null
  } 
  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Codes : ' + this.state.codes)
    const url ='http://webhook.site/570cb185-c3b5-430a-82f7-db34f43e6d71'
    const data = { 
      codes: this.state.name
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
  return(
    <form onSubmit={this.handleSubmit}>
      <AceEditor
        name="codes"
        mode="javascript"
        theme="monokai"
        onChange={this.handleChange}
        width="700px"
        height="700px"
        editorProps={{
            $blockScrolling: true
        }}
      />
      <input type='submit' value='Submit Codes' /> 
    </form>
  )
  }
}

