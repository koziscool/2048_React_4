
// var CSSTransitionGroup = React.addons.CSSTransitionGroup;

import React, { Component } from 'react';
import Tile from "./Tile";
import Score from "./Score";
import Moves from "./Moves";
import model from "./model2048";

class Board2048 extends Component{
  state = {
      tiles: []
  }

  updateTileState() {
    this.setState({
        tiles: [ ...model.values ]
    });
  }

  componentWillMount() {
    model.init();
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

    for (var i = 0; i < this.state.tiles.length; i++) {
      var value = this.state.tiles[i] || "&nbsp";
      children.push(<Tile key={i} index={i} value={value}/>);
    }

    return (
        <div>
          {children}
          <br/><br/>
          <Score value={model.score}/>
          <Moves value={model.moves}/>
        </div>
      );

  }
};

export default Board2048;
