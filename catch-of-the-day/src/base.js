import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-xonupCfeywWf_ZPS2KrVcT2X2Clr-d4",
    authDomain: "catch-of-the-day-weblogix.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-weblogix.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;