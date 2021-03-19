import {LOAD_TODOLIST, FETCH_LOAD_TODOLIST} from '../constants/index';


export interface ITodoListObj {
  todolist: object;
}

export interface ILoadTodoList {
  payload: string | null;
}

export interface IActionLoadTodoList {
  type: typeof LOAD_TODOLIST;
  payload: object;
}

export interface IFecthActionLoadTodoList {
  type: typeof FETCH_LOAD_TODOLIST;
  payload: object;
}
