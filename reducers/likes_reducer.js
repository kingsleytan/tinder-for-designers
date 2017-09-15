import _ from 'lodash';
import {
  LIKE_SHOT,
  CLEAR_LIKED_SHOTS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case CLEAR_LIKED_SHOTS:
      return [];
    case LIKE_SHOT:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
    default:
      return state;
  }
}
