import {LOAD_TODOLIST, FETCH_LOAD_TODOLIST} from '../constants/index';
// import {ILoadTodoList } from '../types/loadTodoList';

export const loadTodoList = (payload:any) => ({
  type: LOAD_TODOLIST,
  payload,
});

export const fetchLoadTodoList = (payload: any) => ({
  type: FETCH_LOAD_TODOLIST,
  payload,
});
