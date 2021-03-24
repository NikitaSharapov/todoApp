import {put, takeEvery, call} from 'redux-saga/effects';
import { FETCH_COMPLETE_TODO } from '../constants';
import { loadTodoList } from '../actions/loadTodoList';
import { IFecthCompleteTodo } from '../types/completeTodo';
import {completeTodoFetch} from '../../utils/fetch';

function* completeTodoWorker(payload: IFecthCompleteTodo) {
  // @ts-ignore ts bad (
  const res = yield call(completeTodoFetch, payload.payload);
  yield put(loadTodoList(res));
}

export function* completeTodoWatcher() {
  yield takeEvery(FETCH_COMPLETE_TODO, completeTodoWorker);
}
