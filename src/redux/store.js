import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import rootReducer from './reducers';
import history from './history';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    routerMiddleware(history),
    logger
  )
);

export default store;
