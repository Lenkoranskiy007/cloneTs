import { applyMiddleware, combineReducers, createStore } from "redux";
import { tweetsReducer } from "./ducks/reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { TweetStateType } from "./ducks/tweets/contracts/state";
import { TagState } from "./tags/contracts/state";
import { tagsReducer } from "./tags/reducer";
import { TweetState } from "./tweet/contracts/state";
import { tweetReducer } from "./tweet/reducer";



//@ts-ignore
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



export interface AppStateType  {
    tweets: TweetStateType
    tags: TagState
    tweet: TweetState
}



const rootReducers = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer
    
})


const sagaMiddleware = createSagaMiddleware();


export const store = createStore(rootReducers,  applyMiddleware(sagaMiddleware)) 

sagaMiddleware.run(rootSaga);
