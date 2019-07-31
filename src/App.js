import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  render(){
      // console.log( "app", this.props )
      return (
        <div className="App">
         <Board dispatch={this.props.dispatch} className="tile-grid"/>
        </div>
      );
  }
}

export default App;
