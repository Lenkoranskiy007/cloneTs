import { Action } from "redux";
import { Tweet } from "../ducks/tweets/contracts/state";
import {LoadingState, TweetState} from './contracts/state'

export enum TweetActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
    type : TweetActionsType.SET_TWEET_DATA
    payload: TweetState['data'];
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
    type : TweetActionsType.FETCH_TWEET_DATA
    payload: string
    
}

export interface SetLoadingStateActionInterface extends Action<TweetActionsType> {
    type : TweetActionsType.SET_LOADING_STATE
    payload: LoadingState
}



export const setTweetData = (payload: TweetState['data']): SetTweetActionInterface => {
    return {type: TweetActionsType.SET_TWEET_DATA,  payload}
}

export const fetchTweetData = (payload: string):FetchTweetActionInterface  => {
    return {type: TweetActionsType.FETCH_TWEET_DATA, payload}
}

export const setTweetLoadingState = (payload: LoadingState):SetLoadingStateActionInterface  => {
    return {type: TweetActionsType.SET_LOADING_STATE, payload}
}



export  type TweetActions = SetTweetActionInterface | FetchTweetActionInterface | SetLoadingStateActionInterface