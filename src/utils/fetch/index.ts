import API_HOST from '../../config/index'
interface IFile {
  token: string;
}

export async function sendToken(file: IFile) {
  const data = await fetch(API_HOST+'/api/todos/todolist', {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8',
      'Authorization': 'Token ' + file.token,
    },
  });
  console.log(data.json());
  return data.json();
}
