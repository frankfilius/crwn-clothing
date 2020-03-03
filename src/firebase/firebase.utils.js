import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCMjlOcGITXY7hJQAEm4acwJZzK7OytWGI',
  authDomain: 'crwn-db-4b990.firebaseapp.com',
  databaseURL: 'https://crwn-db-4b990.firebaseio.com',
  projectId: 'crwn-db-4b990',
  storageBucket: 'crwn-db-4b990.appspot.com',
  messagingSenderId: '211782809411',
  appId: '1:211782809411:web:e5aefbc95b59ea9438e1f6'
};

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
