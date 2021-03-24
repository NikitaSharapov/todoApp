import {CHANGE_TODO, FETCH_CHANGE_TODO} from '../constants';

export interface IChangeTodoObj {
  data: {
    id: string,
    title: string,
    desc: string,
  }
}

export interface IChangeTodo {
  payload: IChangeTodoObj | null;
}

export interface IActionChangeTodo {
  type: typeof CHANGE_TODO;
  payload: IChangeTodoObj;
}

export interface IFecthChangeTodo {
  type: typeof FETCH_CHANGE_TODO;
  payload: IChangeTodoObj;
}