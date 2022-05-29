import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";
import initializeAuthentication from "./../Pages/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  // signIn using google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //signIn using github
  const signInUsingGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // register

  const emailSignIn = (email, password) => {
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  // email login

  const emailLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => [setUser({})]);
  };

  // observe weather user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      }
    });
  }, [auth]);

  return {
    user,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
    emailSignIn,
    emailLogin,
  };
};
export default useFirebase;
