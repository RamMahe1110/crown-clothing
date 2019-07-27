import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUU-7J86Cxm1xwkCofk902gV4gNVHPn_g",
  authDomain: "crown-clothing-ztm-db.firebaseapp.com",
  databaseURL: "https://crown-clothing-ztm-db.firebaseio.com",
  projectId: "crown-clothing-ztm-db",
  storageBucket: "",
  messagingSenderId: "389771770097",
  appId: "1:389771770097:web:ae3bcf3241d3f8f3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
