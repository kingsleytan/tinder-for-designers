import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {}, //default state of store
  compose(
    applyMiddleware(thunk),
  )
);

export default store;
