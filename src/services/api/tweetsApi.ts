import { Tweet, TweetStateType } from "../../store/ducks/tweets/contracts/state";
import axios from 'axios'


export const TweetsApi = {
    fetchTweets(): Promise<TweetStateType['items']> {
      return axios.get('/tweets').then(({ data }) => data );
    },
    fetchTweetData(id: string): Promise<Tweet[]>  {
      return axios.get('/tweets?_id=' + id).then(({data}) => data);
    }
  };
  