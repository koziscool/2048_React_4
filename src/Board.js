
// var CSSTransitionGroup = React.addons.CSSTransitionGroup;

import React, { Component } from 'react';
import Tile from "./Tile";
import { connect } from 'react-redux';

class Board2048 extends Component{

  render() {
    var children = [];
    for (var i = 0; i < this.props.tiles.length; i++) {
      var value = this.props.tiles[i] || "";
      children.push(<Tile key={i} index={i} value={value}/>);
    }

    return (
      <div className="tile-grid">
        {children}
      </div>
    );

  }
};

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles,
  }
};

export default connect(mapStateToProps)(Board2048);
