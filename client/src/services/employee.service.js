const BASIC_URL = 'http://localhost:4002/employees';

export const getAllEmployees = () =>{
    return fetch(BASIC_URL)
    .then(response => response.json())
    .catch(error => console.log(error));
}