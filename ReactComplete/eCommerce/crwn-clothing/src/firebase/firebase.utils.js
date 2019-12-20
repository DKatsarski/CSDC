import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA6qnLnC8kZcacm0LkeGZuEjiTfifiwm-I",
  authDomain: "crwn-db-d7b70.firebaseapp.com",
  databaseURL: "https://crwn-db-d7b70.firebaseio.com",
  projectId: "crwn-db-d7b70",
  storageBucket: "crwn-db-d7b70.appspot.com",
  messagingSenderId: "855651206164",
  appId: "1:855651206164:web:26402055efe2b0f3f69301",
  measurementId: "G-TYZ1C1F3KN"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
