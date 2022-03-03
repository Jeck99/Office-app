const BASIC_URL =process.env.NODE_ENV ==='production'?  
'https://office-mern-app.herokuapp.com/emplyees':
'http://localhost:4002/employees';

export const getAllEmployees = () =>{
    return fetch(BASIC_URL)
    .then(response => response.json())
    .catch(error => console.log(error));
}