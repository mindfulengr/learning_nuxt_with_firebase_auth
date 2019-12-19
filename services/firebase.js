import firebase from 'firebase/app'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

!firebase.apps.length ? firebase.initializeApp(config) : '';

export const auth = firebase.auth();