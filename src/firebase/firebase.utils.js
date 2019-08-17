import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCccaqm1GZH8WFijt7K-eNFa9AdJR6jifM",
    authDomain: "e-commerce-portfolio.firebaseapp.com",
    databaseURL: "https://e-commerce-portfolio.firebaseio.com",
    projectId: "e-commerce-portfolio",
    storageBucket: "",
    messagingSenderId: "209413756285",
    appId: "1:209413756285:web:e6dfb0cb92b5ae00"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;