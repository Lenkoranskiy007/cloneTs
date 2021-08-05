import { createSelector } from "reselect";
import { AppStateType } from "../store";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweet = (state: AppStateType) => state.tweet

export const selectLoadingState = (state: AppStateType) => selectTweet(state).loadingState;

export const selectIsTweetLoading = (state:AppStateType ): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetLoaded = (state: AppStateType) : boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetData = (state: AppStateType): TweetState['data'] => selectTweet(state).data
