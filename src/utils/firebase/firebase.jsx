import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
 } from "firebase/auth";
import {getFirestore, doc, getDoc,setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore";

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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey );
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    })

    await batch.commit();

    console.log("done")
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  }

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

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);