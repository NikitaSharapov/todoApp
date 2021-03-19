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
