import {combineReducers, createStore} from 'redux';


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
                ...state,
                dark: !state.dark
            }  
        default:
            return state;    
    }
}



export const reducers = combineReducers({
    contentReducer
});

//store.js

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();