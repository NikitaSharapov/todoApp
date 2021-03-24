import {CHANGE_TODO, FETCH_CHANGE_TODO} from '../constants';

export const ChangeTodo = (payload: any) => ({
  type: CHANGE_TODO,
  payload,
});

export const fetchChangeTodo = (payload: any) => ({
  type: FETCH_CHANGE_TODO,
  payload,
});
