import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAXODyplhxCSttmCjAnR51e6tRebB44rUs",
  authDomain: "todo-list-f4af7.firebaseapp.com",
  databaseURL: "https://todo-list-f4af7.firebaseio.com",
  projectId: "todo-list-f4af7",
  storageBucket: "todo-list-f4af7.appspot.com",
  messagingSenderId: "381465199027",
  appId: "1:381465199027:web:716be84b5c429266b64bc6",
  measurementId: "G-P6Y3FZH1Q5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();

export default db;