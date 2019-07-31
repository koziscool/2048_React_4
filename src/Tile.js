
import React, { Component } from 'react';

class Tile extends Component{
    render() {
      var colors = [ 'lightgray','orange', 'darkkhaki', 'firebrick', 'lightgreen', 'deepskyblue', 
          'darkslategray', 'red', 'gray', 
          'blue', 'purple', 'brown', 'black', 'darkyellow', 'lightblue', 'pink'];
      var row = Math.floor( this.props.index / 4);
      var col = this.props.index % 4;
      var colorIndex = Math.max( Math.floor(Math.log2( this.props.value )), 0 );
      var style = {
        left: col * 128,
        top: row * 128,
        background: colors[colorIndex],
      };
      return (
        <div className="tile-square" style={style}>{this.props.value}</div>
      );
    }
};

export default Tile;
