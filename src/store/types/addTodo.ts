import {ADD_TODO, FETCH_ADD_TODO} from '../constants/index';

export interface IAddTodoObj {
  todolist: object;
}

export interface IAddTodo {
  payload: string | null;
}

export interface IActionAddTodo {
  type: typeof ADD_TODO;
  payload: object;
}

export interface IFecthAddTodo {
  type: typeof FETCH_ADD_TODO;
  payload: object;
}