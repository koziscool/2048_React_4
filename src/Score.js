
import React from 'react';
import { connect } from 'react-redux';

function Score(props){
    return (
        <div className="score-display" >Score: {props.value}</div>
    );
}

const mapStateToProps = ( state) => {
    return {
        value: state.score
    };
}

export default connect(mapStateToProps)(Score);
