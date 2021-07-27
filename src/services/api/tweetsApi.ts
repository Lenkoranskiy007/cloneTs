import { TweetStateType } from "../../store/ducks/tweets/contracts/state";
import axios from 'axios'


export const TweetsApi = {
    fetchTweets(): Promise<TweetStateType['items']> {
      return axios.get('https://trycode.pw/c/VJRFS.json').then(({ data }) => data);
    },
  };
  