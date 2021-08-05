import axios from 'axios'
import { TagState } from "../../store/tags/contracts/state";


export const TagsApi = {
    fetchTags(): Promise<TagState['items']> {
      return axios.get('/tags').then(({ data }) => data );
    },
  };
  