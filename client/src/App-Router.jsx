import React, { useContext } from "react";
import SignIn from "./components/pages/SignIn/SignIn";
import Chet from "./components/pages/Chet/Chet";
import { AuthContext } from "./Context/firebase-auth";
const AppRouter = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <div className="App">
      <header className="App-header">{user ? <Chet /> : <SignIn />}</header>
    </div>
  );
};

export default AppRouter;
