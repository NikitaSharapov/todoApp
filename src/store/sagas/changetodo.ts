import { put, takeEvery, call } from 'redux-saga/effects';
import { changeTodoFetch } from '../../utils/fetch/index';
import { FETCH_CHANGE_TODO } from '../constants';
import { loadTodoList } from '../actions/loadTodoList';
import { IFecthChangeTodo } from '../types/changeTodo';

function* changeTodoWorker(payload: IFecthChangeTodo) {
  console.log('test', payload);
  // @ts-ignore ts bad (
  const res = yield call(changeTodoFetch, payload.payload);
  yield put(loadTodoList(res));
}

export function* changeTodoWatcher() {
  yield takeEvery(FETCH_CHANGE_TODO, changeTodoWorker);
}
