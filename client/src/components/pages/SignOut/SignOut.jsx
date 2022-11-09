import "./SignOut.css";
import {useContext} from "react";
import { AuthContext } from "../../../Context/firebase-auth";

function SignOut() { 
  const { auth } = useContext(AuthContext);
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
};

export default SignOut;
