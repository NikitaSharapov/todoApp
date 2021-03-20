import {all} from 'redux-saga/effects';
import {call} from 'redux-saga/effects';
import { loadTodoListWatcher } from './loadTodoList';
import { addTodoWatcher } from './addTodo';

export function* rootWather() {
  yield all([call(loadTodoListWatcher), call(addTodoWatcher)]);
}
