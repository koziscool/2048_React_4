
import store from './store';

const dispatch = function( o ){
    store.dispatch({ type:'UPDATE_MODEL', tiles: o.tiles, score: o.score, moves: o.moves, gameOver: o.gameOver });
}

export default dispatch;
