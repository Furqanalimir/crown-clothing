import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
        apiKey: "AIzaSyDGD-LgQBfF2k8rFrOnZMOldFvX8ckGwPY",
        authDomain: "crown-db-499d3.firebaseapp.com",
        projectId: "crown-db-499d3",
        storageBucket: "crown-db-499d3.appspot.com",
        messagingSenderId: "1087429835576",
        appId: "1:1087429835576:web:9b11609253bb21321bdfcd",
        measurementId: "G-LFNDYX5B9D"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;