import { createStore,combineReducers } from 'redux'
import { blogReducer } from '../reducer/blogreducer'


// Store start
export default ()=>{const store=createStore(
    combineReducers({
        actionreducer:blogReducer
    })
);
                    return store;
}

// Store end