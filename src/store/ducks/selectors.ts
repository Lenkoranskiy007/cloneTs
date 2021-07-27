import { createSelector } from "reselect";
import { AppStateType } from "../store";
import { LoadingState, TweetStateType } from "./tweets/contracts/state";

export const selectTweets = (state: AppStateType): TweetStateType => state.tweets

export const selectLoadingState = (state: AppStateType) => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state:AppStateType ): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: AppStateType) : boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
