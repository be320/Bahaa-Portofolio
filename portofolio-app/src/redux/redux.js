import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Persist Config

const persistConfig = {
    key: 'root',
    storage,
  }


//types.js
const SWITCH_THEME = 'SWITCH_THEME';


//actions.js


export const switchTheme = () => (
    {
        type: SWITCH_THEME
    }
)



//reducers.js

const contentInitialState = {
    dark: false
}

export const contentReducer = (state = contentInitialState,action) => {

    switch(action.type)
    {
        case SWITCH_THEME:
            return {
                dark: !state.dark
            }  
        default:
            return state;    
    }
}

export const reducers = combineReducers({
    contentReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

//store.js

// export function configureStore(initialState = {}) {
//     const store = createStore(reducers, initialState);
//     return store;
//   };
  
//   export const store = configureStore();

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export {
   store,
    persistor,
  }