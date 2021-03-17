import {LOAD_TODOLIST, FETCH_LOAD_TODOLIST} from '../constants/index';
import { ILoadTodoList } from '../types/loadTodoList';

export const loadTodoList = (payload: ILoadTodoList) => ({
  type: LOAD_TODOLIST,
  payload,
});

export const fetchLoadTodoList = (payload: ILoadTodoList) => ({
  type: FETCH_LOAD_TODOLIST,
  payload,
});
