
import store from './store';

const dispatch = function( tiles ){
    store.dispatch({ type:'UPDATE_TILES', tiles: tiles });
}

export default dispatch;
