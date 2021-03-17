import {
IActionLoadTodoList,
ILoadTodoList
} from '../types/loadTodoList';

import {LOAD_TODOLIST} from '../constants/index';

const defaultState: ILoadTodoList = {
  payload: null,
};

export const loadTodoList = (
  state = defaultState,
  action: IActionLoadTodoList
) => {
  switch (action.type) {
    case LOAD_TODOLIST:
      return {...state, circles: action.payload};
    default:
      return state;
  }
};
