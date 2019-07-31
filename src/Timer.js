
import React from 'react';

function Timer(props){
    return (
        <div className="timer-display">
            <p>Elapsed Time: </p>
            <p>{props.minutes}:{props.seconds}</p>
        </div>
    );
}

export default Timer;