import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseConfig } from "../firebase";
export const AuthContext = React.createContext();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();

const FirebaseAuthContext = ({ children }) => {
  const [user] = useAuthState(fbAuth);
  const [auth, setAuth] = useState(null);
  useEffect(() => {
      setAuth(fbAuth);
  },[]);

  return (
    <AuthContext.Provider value={{ user, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default FirebaseAuthContext;
