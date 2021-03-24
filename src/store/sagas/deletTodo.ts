import {put, takeEvery, call} from 'redux-saga/effects';
import { FETCH_DELETE_TODO } from '../constants';
import { deleteTodoFetch } from '../../utils/fetch';
import { IFecthActionDeleteTodo } from '../types/deleteTodo';
import { loadTodoList } from '../actions/loadTodoList';

function* deleteTodoWorker(payload: IFecthActionDeleteTodo) {
  // @ts-ignore ts bad (
  const res = yield call(deleteTodoFetch, payload.payload);
  yield put(loadTodoList(res));
}

export function* deleteTodoWatcher() {
  yield takeEvery(FETCH_DELETE_TODO, deleteTodoWorker);
}
