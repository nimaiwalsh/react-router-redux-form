import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions'; 
//Default state set initial time the reducer runs
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      //Turn the array [{id:1, content: }, {...}, {...}] into object {1:{id:`, content:}}
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      //ES6 Key interpolation anything inside the [] in an object becomes a key
      return { ...state, [action.payload.data.id] : action.payload.data}
    default:
      return state;
  }
}