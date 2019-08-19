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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapshot = await userRef.get();

        if (!snapshot.exists) {
            const {displayName, email} = userAuth;
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
    }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;