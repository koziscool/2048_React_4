
import store from './store';

const dispatch = function( o ){
    store.dispatch({ type:'UPDATE_TILES', tiles: o.tiles, score: o.score, moves: o.moves });
}

export default dispatch;
