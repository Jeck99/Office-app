import AppRouter from './App-Router';
import './App.css';
import FirebaseAuthContext from './Context/firebase-auth';
function App() {
  return (
    <FirebaseAuthContext>
      <AppRouter/>
    </FirebaseAuthContext>
  );
}

export default App;
