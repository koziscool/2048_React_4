
// var CSSTransitionGroup = React.addons.CSSTransitionGroup;

import React, { Component } from 'react';
import Tile from "./Tile";
import modelDispatch from "./modelDispatch";
import model from './model2048';
import { connect } from 'react-redux';

class Board2048 extends Component{
  state = {
      beginTime: Date.now(),
      elapsedTime: 0
  }

  updateTileState() {
    this.setState({
        elapsedTime: Date.now() - this.state.beginTime
    });
  }

  componentWillMount() {
    model.init(modelDispatch);
    this.updateTileState();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  handleKey = (e) => {
    if( e.keyCode === 37 ) model.move("left");
    if( e.keyCode === 38 ) model.move("up");
    if( e.keyCode === 39 ) model.move("right");
    if( e.keyCode === 40 ) model.move("down");
    this.updateTileState();
  }

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
