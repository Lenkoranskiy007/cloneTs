import { Action } from "redux";
import {LoadingState, Tweet, TweetStateType} from './tweets/contracts/state'

export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET' 
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
    type : TweetsActionsType.SET_TWEETS
    payload: TweetStateType['items']
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType> {
    type : TweetsActionsType.FETCH_ADD_TWEET
    payload: string
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
    type : TweetsActionsType.ADD_TWEET
    payload: Tweet
}



export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type : TweetsActionsType.FETCH_TWEETS
    
}

export interface SetLoadingStateActionInterface extends Action<TweetsActionsType> {
    type : TweetsActionsType.SET_LOADING_STATE
    payload: LoadingState
}



export const setTweets = (payload: TweetStateType['items']): SetTweetsActionInterface => {
    return {type: TweetsActionsType.SET_TWEETS,  payload}
}

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => {
    return {type: TweetsActionsType.FETCH_ADD_TWEET,  payload}
}

export const addTweet = (payload: Tweet): AddTweetActionInterface => {
    return {type: TweetsActionsType.ADD_TWEET,  payload}
}


export const fetchTweets = ():FetchTweetsActionInterface  => {
    return {type: TweetsActionsType.FETCH_TWEETS}
}

export const setTweetsLoadingState = (payload: LoadingState):SetLoadingStateActionInterface  => {
    return {type: TweetsActionsType.SET_LOADING_STATE, payload}
}










export  type TweetsActions = SetTweetsActionInterface | FetchTweetsActionInterface | SetLoadingStateActionInterface | FetchAddTweetActionInterface | AddTweetActionInterface