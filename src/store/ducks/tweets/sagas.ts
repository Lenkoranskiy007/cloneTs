import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from '../actionCreator';
import { LoadingState } from './contracts/state';




export function* fetchTweetsRequest(): any {

  try {
    const items  = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }

 
  
}

export function* tweetsSaga() {
  console.log(1234);
  
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,fetchTweetsRequest  )
  }

