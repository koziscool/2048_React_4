
import React, { Component } from 'react';

const FOUR = 4;


class Tile extends Component{
    render() {
      var colors = [ 'lightgray','orange', 'darkkhaki', 'firebrick', 'lightgreen', 'deepskyblue', 
          'goldenrod', 'red', 'gray', 
          'blue', 'purple', 'brown', 'black', 'darkyellow', 'lightblue', 'pink'];
      var row = Math.floor( this.props.index / FOUR);
      var col = this.props.index % FOUR;
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
