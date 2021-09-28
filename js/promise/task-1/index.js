//input: obj
//output: undefined

function saveUser(userData) {
  //input: url (string), obj (headers,...)
  //output: obj promise
  const res = fetch(
    'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }
  )
    .then((response) => response.json())
    .then((body) => console.log(body))
    .catch((error) => console.log(error));

  // .then()
  //output: callback
  //output: promise
}

const user = {
  email: 'test@gmail.com',
  firstName: 'Stanislav',
  lastName: 'Rozhuk',
  city: 'Kherson',
  age: 26,
};

console.log(JSON.stringify(user));

saveUser(user);
