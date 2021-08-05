import { Action } from "redux";
import {LoadingState, TagState} from './contracts/state'

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type : TagsActionsType.SET_TAGS
    payload: TagState['items']
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
    type : TagsActionsType.FETCH_TAGS
    
}

export interface SetLoadingStateActionInterface extends Action<TagsActionsType> {
    type : TagsActionsType.SET_LOADING_STATE
    payload: LoadingState
}



export const setTags = (payload: TagState['items']): SetTagsActionInterface => {
    return {type: TagsActionsType.SET_TAGS,  payload}
}

export const fetchTags = ():FetchTagsActionInterface  => {
    return {type: TagsActionsType.FETCH_TAGS}
}

export const setTagsLoadingState = (payload: LoadingState):SetLoadingStateActionInterface  => {
    return {type: TagsActionsType.SET_LOADING_STATE, payload}
}










export  type TagsActions = SetTagsActionInterface | FetchTagsActionInterface | SetLoadingStateActionInterface