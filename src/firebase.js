// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDCAMN-bvFLpiU6lyTx9Ef_j96fQkOGKvA",
    authDomain: "react-crud-80330.firebaseapp.com",
    databaseURL: "https://react-crud-80330-default-rtdb.firebaseio.com",
    projectId: "react-crud-80330",
    storageBucket: "react-crud-80330.appspot.com",
    messagingSenderId: "553626216132",
    appId: "1:553626216132:web:2cd3a393caf2f68d19cb91"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getDatabase(app);

export default fireDB;