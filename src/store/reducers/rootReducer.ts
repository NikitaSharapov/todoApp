import {combineReducers} from 'redux';
import { loadTodoList } from '../reducers/loadTodoList'
export const rootReducer = combineReducers({
  loadTodoList
});
