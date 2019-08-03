import React, { Component } from 'react';
import modelDispatch from "./modelDispatch";
import model from './model2048';
import Board from './Board';
import DisplayBox from './DisplayBox';
import NewGame from './NewGame';
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
    if( e.keyCode === 78 ) this.restart();
  };

  restart = () =>{
    model.init(modelDispatch);
    this.props.startTimer();
  }

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

    const newGameStyle = {
      top: 300,
      left: 700,
      width: 160
    };

    // console.log(this.props.gameOver);

    return (
      <div className="App">
      <br/><br/>
        <DisplayBox style={scoreStyle} text={scoreText}/>
        <DisplayBox style={movesStyle} text={movesText}/>
        <NewGame style={newGameStyle} text="New Game" restart={this.restart}/>
        <DisplayBox style={timerStyle} text={timerText} text2={timerText2}/>
        <Board gameOver={this.props.gameOver}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      score: state.score, 
      moves: state.moves,
      elapsedTime: state.elapsedTime,
      gameOver: state.gameOver
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => { dispatch({ type: 'START_TIMER'}) },
    timerIncrement: () => { dispatch({ type: 'TIMER_INCREMENT'}) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
