// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5gjU7QGnfmnZK7CdAQgAf-GpXku28J98",
  authDomain: "fir-authrn-46dcd.firebaseapp.com",
  projectId: "fir-authrn-46dcd",
  storageBucket: "fir-authrn-46dcd.appspot.com",
  messagingSenderId: "387749788137",
  appId: "1:387749788137:web:fac1ac0a299314d63c7378"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()
export { auth };