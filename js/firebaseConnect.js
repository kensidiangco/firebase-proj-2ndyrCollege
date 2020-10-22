var firebaseConfig = {
    apiKey: "AIzaSyBsKnyIMk8JJnMxSxp3IzrGCaykeiDRMQ4",
    authDomain: "fir-proj-9fce5.firebaseapp.com",
    databaseURL: "https://fir-proj-9fce5.firebaseio.com",
    projectId: "fir-proj-9fce5",
    storageBucket: "fir-proj-9fce5.appspot.com",
    messagingSenderId: "872455950699",
    appId: "1:872455950699:web:8de0e15b0ea6135fbbbc2e",
    measurementId: "G-H94ZBN8XBV"
};	
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();