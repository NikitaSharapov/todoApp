import {all} from 'redux-saga/effects';
import {call} from 'redux-saga/effects';
import { loadTodoListWatcher } from './loadTodoList';

export function* rootWather() {
  yield all([call(loadTodoListWatcher)]);
}
