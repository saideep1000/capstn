// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {   getAuth,   signInWithRedirect,  signInWithPopup  ,GoogleAuthProvider  }   from 'firebase/auth';
import {  getFirestore,   doc,   getDoc,   setDoc  }   from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7WV3aMWlA0lP7PIeaM4euyObWG_cdeoo",
  authDomain: "crwn-clothing-db-5e14e.firebaseapp.com",
  projectId: "crwn-clothing-db-5e14e",
  storageBucket: "crwn-clothing-db-5e14e.appspot.com",
  messagingSenderId: "192653849004",
  appId: "1:192653849004:web:f626e881735152ca568a09"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account',
});


export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const db=getFirestore();

export const createUserDocumentFromAuth=async (userAuth)=>{

    const userDocRef=doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
      const {   displayName  ,  email  }  =userAuth;
      const createdAt=new Date();

      try{
             await setDoc(userDocRef,{
              displayName,
              email,
              createdAt
             });

      }  catch(error){
             console.log('error creating the user',error.message);

      }
    }


    return userDocRef;
}