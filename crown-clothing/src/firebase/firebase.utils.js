import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={

        apiKey: "AIzaSyBI6dITTxIcWsWgEn-q8DLoJi9a2jM6GvM",
        authDomain: "crown-db-157fd.firebaseapp.com",
        projectId: "crown-db-157fd",
        storageBucket: "crown-db-157fd.appspot.com",
        messagingSenderId: "932605994516",
        appId: "1:932605994516:web:c58cc4a2d5bf7225b06901",
        measurementId: "G-FQK27L6825"

};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();           //it's an async, so we have to await this

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;