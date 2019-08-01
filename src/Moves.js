
import React from 'react';
import { connect } from 'react-redux';


function Moves(props){
    return (
        <div className="moves-display" >Moves: {props.value}</div>
    );

}

const mapStateToProps = ( state) => {
    return {
        value: state.moves
    };
}

export default connect(mapStateToProps)(Moves);


