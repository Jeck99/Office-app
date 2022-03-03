import './App.css';
import { getAllEmployees } from './services/employee.service';

function App() {
  const getEmployees = () => {
    getAllEmployees()
      .then(employees => employees && console.log("then: " + employees))
      .catch(error => console.log("error: " + error));
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getEmployees}>Get Employees</button>
      </header>
    </div>
  );
}

export default App;
