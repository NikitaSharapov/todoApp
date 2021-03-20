import config from '../../config/index'
// interface IFile {
//   token: string;
// }

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


export async function addTodo(file: any) {
  console.log('file.todoItem ', file.todoItem);
  const data = await fetch(`${config.API_HOST}/api/todos/todolist/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization':  `Token ${file.token}`,
    },
    body: file.todoItem,
  })
  return data.json();
}
