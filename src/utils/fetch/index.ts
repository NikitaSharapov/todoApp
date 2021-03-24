import config from '../../config/index'
import { IAddTodoObj } from '../../store/types/addTodo';
import { IChangeTodoObj } from '../../store/types/changeTodo';
import { ICompleteTodoObj } from '../../store/types/completeTodo';
import { IDeleteTodoObj } from '../../store/types/deleteTodo';

export async function sendToken() {
  const token = localStorage.getItem('userToken');
  const parsToken = JSON.parse(token || '{}');
  const data = await fetch(`${config.API_HOST}/api/todos/todolist`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${parsToken}`,
    },
  })
  return data.json();
}

export async function addTodo(file: IAddTodoObj) {
  const token = localStorage.getItem('userToken');
  const parsToken = JSON.parse(token || '{}');
  const data = await fetch(`${config.API_HOST}/api/todos/todolist/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${parsToken}`,
    },
    body: JSON.stringify(file.todoItem),
  })
  return data.json();
}

export async function deleteTodoFetch(file: IDeleteTodoObj) {
  console.log('file.id ', file);
  const token = localStorage.getItem('userToken');
  const parsToken = JSON.parse(token || '{}');
  const data = await fetch(`${config.API_HOST}/api/todos/todolist/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${parsToken}`,
    },
    body: JSON.stringify(file),
  })
  return data.json();
}

export async function completeTodoFetch(file: ICompleteTodoObj) {
  console.log('file ', file);
  const token = localStorage.getItem('userToken');
  const parsToken = JSON.parse(token || '{}');
  const data = await fetch(`${config.API_HOST}/api/todos/todolist/comp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${parsToken}`,
    },
    body: JSON.stringify(file),
  })
  return data.json();
}

export async function changeTodoFetch(file: IChangeTodoObj) {
  console.log('file ', file);
  const token = localStorage.getItem('userToken');
  const parsToken = JSON.parse(token || '{}');
  const data = await fetch(`${config.API_HOST}/api/todos/todolist/change`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${parsToken}`,
    },
    body: JSON.stringify(file),
  })
  return data.json();
}