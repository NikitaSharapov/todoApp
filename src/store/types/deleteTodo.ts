import {DELETE_TODO, FETCH_DELETE_TODO} from '../constants';

export interface IDeleteTodoObj {
  id: string
}

export interface IDeleteTodo {
  payload: IDeleteTodoObj | null;
}

export interface IActionDeleteTodo {
  type: typeof DELETE_TODO;
  payload: IDeleteTodoObj;
}

export interface IFecthActionDeleteTodo {
  type: typeof FETCH_DELETE_TODO;
  payload: IDeleteTodoObj;
}