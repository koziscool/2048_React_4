import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  render(){
      return (
        <div className="App">
         <Board className="tile-grid"/>
        </div>
      );
  }
}

export default App;
