import React, { Component } from 'react';
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
  }

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
