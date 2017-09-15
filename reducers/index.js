import { combineReducers } from 'redux';
import auth from './auth_reducer';
import shots from './shots_reducer';
import likedShots from './likes_reducer';

export default combineReducers({
  auth, shots, likedShots
});
