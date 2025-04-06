import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import {getFirestore, doc, getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGUa25aPtUKgMxX3seTW6Fi3A7hzm5NMc",
    authDomain: "rare-clothing-db.firebaseapp.com",
    projectId: "rare-clothing-db",
    storageBucket: "rare-clothing-db.firebasestorage.app",
    messagingSenderId: "821036396292",
    appId: "1:821036396292:web:ef4b72cc046dc653faea51"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }catch(error) {
        console.log('Error while creating the user', error.message)
      }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }