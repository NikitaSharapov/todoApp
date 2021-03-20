import config from '../../config/index'
import { IAddTodoObj } from '../../store/types/addTodo';

export async function sendToken(file: string) {
  const data = await fetch(`${config.API_HOST}/api/todos/todolist`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${file}`,
    },
  })
  return data.json();
}

export async function addTodo(file: IAddTodoObj) {
  console.log('file.todoItem ', file.todoItem);
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
