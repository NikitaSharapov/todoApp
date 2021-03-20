import {combineReducers} from 'redux';
import { loadTodoList } from '../reducers/loadTodoList'
import { addTodo } from '../reducers/addTodo'

export const rootReducer = combineReducers({
  loadTodoList,
  addTodo
});
