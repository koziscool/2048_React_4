
const initialState = {
    tiles: [], 
    score: 0,
    moves: 0,
    beginTime: 0,
    elapsedTime: 0,
    gameOver: false
};

const myReducer = (state = initialState, action) => {
    if( action.type === 'UPDATE_MODEL' ) {
        return {
            ...state,
            tiles: action.tiles,
            moves: action.moves,
            score: action.score,
            gameOver: action.gameOver
        };
    }

    if( action.type === 'START_TIMER' ) {
        return {
            ...state,
            beginTime: Date.now()
        };
    }

    if( action.type === 'TIMER_INCREMENT' ) {
        return {
            ...state,
            elapsedTime: Date.now() - state.beginTime
        };
    }

    return state;
}

export default myReducer;

