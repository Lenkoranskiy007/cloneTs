import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../services/api/tweetsApi';
import { Tweet } from '../ducks/tweets/contracts/state';
import { FetchTweetActionInterface,  setTweetData, setTweetLoadingState, TweetActionsType } from './actionCreator';
import { LoadingState } from './contracts/state';







export function* fetchTweetRequest({payload:tweetId }:  FetchTweetActionInterface ): any {

  try {
    const items: Tweet[]  = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(items[0]))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }

 
  
}

export function* tweetSaga() {
  
    yield takeEvery(TweetActionsType.FETCH_TWEET_DATA ,fetchTweetRequest)
  }


