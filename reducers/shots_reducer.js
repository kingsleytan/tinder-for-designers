import _ from 'lodash';
import {
  FETCH_SHOTS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SHOTS:
    return _.uniqBy([
      action.payload, ...state
    ], 'id');
    default:
      return state;
  }
}
