import {put, takeEvery, call} from 'redux-saga/effects';
import {sendToken} from '../../utils/fetch/index';
import {IFecthActionLoadTodoList} from '../types/loadTodoList';
import { FETCH_LOAD_TODOLIST } from '../constants';
import { loadTodoList } from '../actions/loadTodoList';


function* loadTodoListWorker(payload: IFecthActionLoadTodoList) {
  // @ts-ignore
  const res = yield call(sendToken, payload.payload);
  yield put(loadTodoList(res));
}

export function* loadTodoListWatcher() {
  yield takeEvery(FETCH_LOAD_TODOLIST, loadTodoListWorker);
}
