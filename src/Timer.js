
import React from 'react';
import { connect } from 'react-redux';

function Timer(props){

    let seconds = Math.floor( props.value / 1000 );
    const minutes = Math.floor( seconds / 60 );
    seconds = seconds - minutes * 60;

    return (
        <div className="timer-display">
            <p>Elapsed Time: </p>
            <p>{minutes}:{seconds}</p>
        </div>
    );
}

const mapStateToProps = ( state) => {
    return {
        value: state.elapsedTime
    };
}

export default connect(mapStateToProps)(Timer);
