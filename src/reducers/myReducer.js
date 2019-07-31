
const initialState = {
    tiles: []
};

const myReducer = (state = initialState, action) => {
    if( action.type === 'UPDATE_TILES' ) {
        return {
            ...state,
            tiles: action.tiles
        };
    }
    return state;
}

export default myReducer;

