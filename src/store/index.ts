import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import {rootReducer} from '../store/reducers/rootReducer';

import {rootWather} from '../store/sagas/rootWatcher';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootWather);
