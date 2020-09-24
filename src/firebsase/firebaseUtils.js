import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCq1K6pux4SpBxJNwl7ZkJIk70mbco2xAI",
  authDomain: "clothingapp-cd2f1.firebaseapp.com",
  databaseURL: "https://clothingapp-cd2f1.firebaseio.com",
  projectId: "clothingapp-cd2f1",
  storageBucket: "clothingapp-cd2f1.appspot.com",
  messagingSenderId: "975577777944",
  appId: "1:975577777944:web:7908d365e73987a4ff406d",
  measurementId: "G-3RCL9VB9LV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = function(){
  auth.signInWithPopup(provider);
}

export default firebase;