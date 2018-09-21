import React, { Component } from 'react';
import './App.css';
import DecathlonNavbar from "./modules/decathlon/navbar/decathlonnavbar.js"

import LocalRouter from './modules/router/router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocalRouter />
      </div>
    );
  }
}

export default App;
