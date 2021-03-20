import {ADD_TODO,FETCH_ADD_TODO} from '../constants/index';

export const addTodo = (payload:any) => ({
  type: ADD_TODO,
  payload,
});

export const fetchAddTodo = (payload: any) => ({
  type: FETCH_ADD_TODO,
  payload,
});
