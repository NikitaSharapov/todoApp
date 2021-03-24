import {COMPLETE_TODO, FETCH_COMPLETE_TODO} from '../constants';

export interface ICompleteTodoObj {
  data: {
    id: string,
    completed: boolean,
  }
}

export interface ICompleteTodo {
  payload: ICompleteTodoObj | null;
}

export interface IActionCompleteTodo {
  type: typeof COMPLETE_TODO;
  payload: ICompleteTodoObj;
}

export interface IFecthCompleteTodo {
  type: typeof FETCH_COMPLETE_TODO;
  payload: ICompleteTodoObj;
}