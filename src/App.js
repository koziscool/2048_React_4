import React, { Component } from 'react';
import modelDispatch from "./modelDispatch";
import model from './model2048';
import Board from './Board';
import Score from './Score';
import Moves from './Moves';
import Timer from './Timer';
import { connect } from 'react-redux';


class App extends Component {

  componentWillMount() {
    this.props.startTimer();
    setInterval(() => {
      this.props.timerIncrement();
    }, 1000);
    model.init(modelDispatch);
    window.addEventListener('keydown', this.handleKey);
  }

  handleKey = (e) => {
    if( e.keyCode === 37 ) model.move("left");
    if( e.keyCode === 38 ) model.move("up");
    if( e.keyCode === 39 ) model.move("right");
    if( e.keyCode === 40 ) model.move("down");
  };

  render(){
    return (
      <div className="App">
      <br/><br/>
        <Score />
        <Moves />
        <Timer />          
        <Board />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => { dispatch({ type: 'START_TIMER'})},
    timerIncrement: () => { dispatch({ type: 'TIMER_INCREMENT'})}
  }
}

export default connect(null, mapDispatchToProps)(App);
