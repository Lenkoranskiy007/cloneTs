import { createSelector } from "reselect";
import { AppStateType } from "../store";
import { LoadingState } from "./contracts/state";

export const selectTags = (state: AppStateType) => state.tags

export const selectLoadingState = (state: AppStateType) => selectTags(state).loadingState;

export const selectIsTagsLoading = (state:AppStateType ): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state: AppStateType) : boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
