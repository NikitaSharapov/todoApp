import {put, takeEvery, call} from 'redux-saga/effects';
import {addTodo} from '../../utils/fetch/index';
import {IFecthActionLoadTodoList} from '../types/loadTodoList';
import { FETCH_ADD_TODO } from '../constants';
import { loadTodoList } from '../actions/loadTodoList';


function* addTodoWorker(payload: IFecthActionLoadTodoList) {
  // @ts-ignore
  const res = yield call(addTodo, payload.payload);
  yield put(loadTodoList(res));
}

export function* addTodoWatcher() {
  yield takeEvery(FETCH_ADD_TODO, addTodoWorker);
}
