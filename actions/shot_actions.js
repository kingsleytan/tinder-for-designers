import axios from 'axios';
import qs from 'qs';

import {
  FETCH_SHOTS,
  LIKE_SHOT,
  CLEAR_LIKED_SHOTS
} from './types';

const SHOT_ROOT_URL = 'https://api.dribbble.com/v1/users/';
const SHOT_QUERY_PARAMS = {
  access_token: '3fc7e7e97ce49bad872e7dad4140fac02c3de0cb38688a200d71fbfa97cc7e4b'
};

const randomID = () => Math.floor((Math.random() * (9999 - 1))) + 1;

const buildShotsUrl = (id) => {
  const query = qs.stringify({ ...SHOT_QUERY_PARAMS });
  return `${SHOT_ROOT_URL}${id}/shots?${query}`;
};

export const fetchShots = (callback) => async dispatch => {
  try {
    let id = randomID();
    console.log(id);
    const url = buildShotsUrl(id);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_SHOTS, payload: data });
    console.log(url);
    console.log(data);
    callback();
  } catch(e) {
    console.error(e);
  }
};

export const likeShot = (shot) => {
  return {
    payload: shot,
    type: LIKE_SHOT
  };
};

export const clearLikedShots = () => {
  return { type: CLEAR_LIKED_SHOTS };
};
