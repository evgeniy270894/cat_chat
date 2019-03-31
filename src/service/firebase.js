import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyADEZ7H4jXeHgYYliTlWkEYskBLKvfdGlQ",
  authDomain: "chat-bf8c6.firebaseapp.com",
  databaseURL: "https://chat-bf8c6.firebaseio.com",
  projectId: "chat-bf8c6",
  storageBucket: "chat-bf8c6.appspot.com",
  messagingSenderId: "809186766053"
};
firebase.initializeApp(config);
const storage = firebase.storage()
const database = firebase.database()
export {
  database,
  storage
}
