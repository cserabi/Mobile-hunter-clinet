import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [error, setError] = useState();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

  }, [user.email])



  //register data
  const registerUser = (email, password, name, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, 'POST');
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  }


  //common method function
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => console.log(data))
  }


  const signInWithGoogle = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setError('');
        const destination = location?.state?.from || '/home';
        history.push(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  }


  //login data
  const loginUser = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/dashboard';
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  }




  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }
  // observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [])



  return {
    user,
    signInWithGoogle,
    logOut,
    setUser,
    setError,
    error,
    isLogin,
    isLoading,
    registerUser,
    setIsloading,
    loginUser,
    Admin


  }
}

export default useFirebase;