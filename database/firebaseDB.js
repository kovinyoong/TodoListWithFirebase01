import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuEanWHBtXc2DtVzIt-B4SbPDhp5GvDf8",
  authDomain: "todolist-43508.firebaseapp.com",
  projectId: "todolist-43508",
  storageBucket: "todolist-43508.appspot.com",
  messagingSenderId: "696280100129",
  appId: "1:696280100129:web:4e0a1cb8383303f7b1a260",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
