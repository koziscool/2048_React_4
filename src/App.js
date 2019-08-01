import React, { Component } from 'react';
import modelDispatch from "./modelDispatch";
import model from './model2048';
import Board from './Board';
import DisplayBox from './DisplayBox';
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

    const scoreStyle = {
      top: 50,
      left: 10,
      width: 160
    };

    const scoreText = "Score: " + this.props.score;
    
    const movesStyle = {
      top: 50,
      left: 180,
      width: 160
    };

    const movesText = "Moves: " + this.props.moves;
        
    const timerStyle = {
      top: 50,
      left: 350,
      width: 160,
      "line-height": 15,
      "font-size": 20
    };

    let seconds = Math.floor( this.props.elapsedTime / 1000 );
    const minutes = Math.floor( seconds / 60 );
    seconds = seconds - minutes * 60;
    const timerText = "Elapsed Time:"
    const timerText2 = minutes.toString() + ":" + seconds;


    return (
      <div className="App">
      <br/><br/>
        <DisplayBox style={scoreStyle} text={scoreText}/>
        <DisplayBox style={movesStyle} text={movesText}/>
        <DisplayBox style={timerStyle} text={timerText} text2={timerText2}/>
        <Board />
      </div>
    );
  }
}

const mapStateToProps = ( state) => {
  return {
      score: state.score, 
      moves: state.moves,
      elapsedTime: state.elapsedTime
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => { dispatch({ type: 'START_TIMER'})},
    timerIncrement: () => { dispatch({ type: 'TIMER_INCREMENT'})}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
