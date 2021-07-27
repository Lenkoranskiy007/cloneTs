import { applyMiddleware, combineReducers, createStore } from "redux";
import { tweetsReducer } from "./ducks/reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { TweetStateType } from "./ducks/tweets/contracts/state";



//@ts-ignore
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



export interface AppStateType  {
    tweets: TweetStateType
}



const rootReducers = combineReducers({
    tweets: tweetsReducer
})


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(rootReducers,  applyMiddleware(sagaMiddleware)) 

sagaMiddleware.run(rootSaga);
