import {all} from 'redux-saga/effects';
import {call} from 'redux-saga/effects';
import { loadTodoListWatcher } from './loadTodoList';
import { addTodoWatcher } from './addTodo';
import { deleteTodoWatcher } from './deletTodo';
import { completeTodoWatcher } from './completeTodo';
import { changeTodoWatcher } from './changetodo';

export function* rootWather() {
  yield all([call(loadTodoListWatcher), call(addTodoWatcher), call(deleteTodoWatcher), call(completeTodoWatcher), call(changeTodoWatcher)]);
}
