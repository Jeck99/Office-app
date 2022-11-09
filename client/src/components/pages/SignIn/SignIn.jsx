import "./SignIn.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {useContext} from "react";
import { AuthContext } from "../../../Context/firebase-auth";

function SignIn () {
  const { auth } = useContext(AuthContext);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
};

export default SignIn;
