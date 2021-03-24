import {COMPLETE_TODO, FETCH_COMPLETE_TODO} from '../constants';

export const completeTodo = (payload: any) => ({
  type: COMPLETE_TODO,
  payload,
});
  
export const fetchComplateTodo = (payload: any) => ({
  type: FETCH_COMPLETE_TODO,
  payload,
});
