import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAx3sEkIG1uK2Db1NhxSDOf5NzjU4PyTno",
  authDomain: "my-slack-99ec7.firebaseapp.com",
  databaseURL: "https://my-slack-99ec7.firebaseio.com",
  projectId: "my-slack-99ec7",
  storageBucket: "my-slack-99ec7.appspot.com",
  messagingSenderId: "309706623846",
  appId: "1:309706623846:web:935e52ba151ecdb3f816a7",
  measurementId: "G-9S88BE8P3X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
