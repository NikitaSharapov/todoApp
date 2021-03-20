import {
  IAddTodo,
  IActionAddTodo
  } from '../types/addTodo';
  
  import {ADD_TODO} from '../constants/index';
  
  const defaultState: IAddTodo = {
    payload: null,
  };
  
  export const addTodo = (
    state = defaultState,
    action: IActionAddTodo
  ) => {
    switch (action.type) {
      case ADD_TODO:
        return {...state, todolist: action.payload};
      default:
        return state;
    }
  };
  