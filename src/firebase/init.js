 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRLl6k534te7_kaH_Wkh49FgxItw0zWmc",
    authDomain: "geolocation-62dbf.firebaseapp.com",
    databaseURL: "https://geolocation-62dbf.firebaseio.com",
    projectId: "geolocation-62dbf",
    storageBucket: "geolocation-62dbf.appspot.com",
    messagingSenderId: "217994909645",
    appId: "1:217994909645:web:87d8cf7e89b64d2b"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 export default firebaseApp.firestore()