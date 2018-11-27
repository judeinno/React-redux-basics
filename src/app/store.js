
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
import { createLogger } from 'redux-logger';
import { mathReducer } from './reducers/mathReducer';
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';


 export const store = createStore(combineReducers({
    mathReducer,
    userReducer}),
    compose(
        applyMiddleware(createLogger(), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
