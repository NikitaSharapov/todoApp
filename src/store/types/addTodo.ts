import {ADD_TODO, FETCH_ADD_TODO} from '../constants';

export interface IAddTodoObj {
  todoItem: {
    todo: {
      title: string,
    }
  };
}

export interface IAddTodo {
  payload: IAddTodoObj | null;
}

export interface IActionAddTodo {
  type: typeof ADD_TODO;
  payload: IAddTodoObj;
}

export interface IFecthAddTodo {
  type: typeof FETCH_ADD_TODO;
  payload: IAddTodoObj;
}