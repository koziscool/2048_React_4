
import React, { Component } from 'react';

class NewGame extends Component{
    
    restartGame = () => {
        this.props.restart();
    }

    render() {

        return (
            <button className="new-game-button"
                    style={this.props.style}
                    onClick={this.restartGame}>
                <p>{this.props.text}</p>
            </button>
        );
    }

}

export default NewGame;