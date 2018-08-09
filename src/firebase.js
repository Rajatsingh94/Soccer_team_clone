import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';



const config= {
    apiKey: "AIzaSyAT0RbQMeFs76tf9mZUmhzA8m8ANT2fO1w",
    authDomain: "soccertime-342e3.firebaseapp.com",
    databaseURL: "https://soccertime-342e3.firebaseio.com",
    projectId: "soccertime-342e3",
    storageBucket: "soccertime-342e3.appspot.com",
    messagingSenderId: "1013387887979"
};

firebase.initializeApp(config);

const firebasedb = firebase.database();
const firebaseMatch = firebasedb.ref('matches');



export {
    firebase, firebaseMatch
}
