import  config  from '../../config';

export async function sendRegForm(formData: any) {
  const formDatajson = JSON.stringify(formData);
  const data = await fetch(config.API_HOST + '/api/users/signup/', {
    method: 'POST',
    body: formDatajson,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
  return data;
}

export async function sendAuthForm(formData: any) {
  const formDatajson = JSON.stringify(formData);
  await fetch(config.API_HOST + '/api/users/signin/', {
    method: 'POST',
    body: formDatajson,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',

    },
  }).then((response) => {
    return response.json();
  })
  .then((data) => {
    localStorage.setItem("token", data.token);   
  });
}

export async function logout() {
  const token = localStorage.getItem('token');
  console.log('token', token);
  
  await fetch(config.API_HOST + '/api/users/signout/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Token ' + token,
    },
  }).then((response) => {
    return response.json();
  })
  .then((data) => {
    localStorage.clear();
  });
}
