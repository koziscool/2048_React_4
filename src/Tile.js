
import React, { Component } from 'react';

class Tile extends Component{
    render() {
      var colors = [ 'lightgray','orange', 'darkkhaki', 'firebrick', 'lightgreen', 'deepskyblue', 
          'darkslategray', 'red', 'gray', 
          'blue', 'purple', 'brown', 'black', 'darkyellow', 'lightblue', 'pink'];
      var row = Math.floor( this.props.index / 4);
      var col = this.props.index % 4;
      var color = colors[0];
      
      if( this.props.value > 0 ) color = colors[ Math.log2( this.props.value ) ];

      var style = {
        left: col * 128,
        top: row * 128,
        background: color,
      };
      return (
        <div className="tile-square" style={style}>{this.props.value}</div>
      );
    }
};

export default Tile;
