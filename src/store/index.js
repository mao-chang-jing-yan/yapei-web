import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
// import thunk from "redux-thunk";



const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);

const store = createStore(
    reducer,
    enhancer
    // applyMiddleware(
    //     [
    //         thunk,
    //         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     ]
    // ),

);
sagaMiddleware.run(mySaga)
export default store;


