import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Component } from 'react';


class App extends Component {
  render(){
    return(
      <div className='welcomeMessage'>
        <h1>Welcome to My First React Application</h1>
      </div>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

