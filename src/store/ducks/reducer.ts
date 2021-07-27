import produce, { Draft } from "immer";
import { TweetsActions, TweetsActionsType } from "./actionCreator";
import { TweetStateType, LoadingState } from "./tweets/contracts/state";

const initialTweetsState: TweetStateType = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetStateType>, action: TweetsActions) => {


    switch(action.type){
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
           draft.loadingState = LoadingState.LOADED
           break;

        case TweetsActionsType.FETCH_TWEETS: 
           draft.items = []
           draft.loadingState = LoadingState.LOADING
           break;

        case TweetsActionsType.SET_LOADING_STATE: 
           draft.loadingState = action.payload
           break;

        default: 
        return draft
    }
    


},initialTweetsState)
