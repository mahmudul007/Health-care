import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const initializefirebaseapp = () => {

    initializeApp(firebaseConfig);
}
export default initializefirebaseapp;