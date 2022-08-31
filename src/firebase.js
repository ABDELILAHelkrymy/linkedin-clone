import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzhS4-fE5Q6xlyBfC2_kGt_pMLtYekdec",
    authDomain: "linkedin-clone-286e6.firebaseapp.com",
    projectId: "linkedin-clone-286e6",
    storageBucket: "linkedin-clone-286e6.appspot.com",
    messagingSenderId: "580370678187",
    appId: "1:580370678187:web:3d0f5d71eefdee1b3552ee"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore()
  const auth = firebase.auth();

  export {db, auth}