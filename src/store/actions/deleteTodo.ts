import {DELETE_TODO, FETCH_DELETE_TODO} from '../constants';
import { IDeleteTodoObj } from '../types/deleteTodo';

export const deleteTodo = (payload: IDeleteTodoObj) => ({
  type: DELETE_TODO,
  payload,
});

export const fetchDeleteTodo = (payload: IDeleteTodoObj) => ({
  type: FETCH_DELETE_TODO,
  payload,
});
