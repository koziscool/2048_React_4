

import React from 'react';

function DisplayBox(props){
    if( !props.text2 ){
        return (
            <div className="display-box" style={props.style}>{props.text}</div>
        );
    } else {
        return (
            <div className="display-box" style={props.style}>
                <p>{props.text}</p>
                <p>{props.text2}</p>
            </div>
        );
    }
}

export default DisplayBox;


