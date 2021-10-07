import firebase from 'firebase';
let config = {
 	apiKey: "AIzaSyDYOjWS8QIxo_ree_SFWU3W9TDyVr8LtTM",
    authDomain: "reactnativesample-46645.firebaseapp.com",
    databaseURL: "https://reactnativesample-46645.firebaseio.com",
    projectId: "reactnativesample-46645",
    storageBucket: "reactnativesample-46645.appspot.com",
    messagingSenderId: "944569326339"
};

let app = firebase.initializeApp(config);

export const db = app.database();
export const auth = app.auth(); 