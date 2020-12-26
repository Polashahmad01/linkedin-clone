import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzvFnGCQ_UQokJ-waYdneyT5atZncc8zA",
    authDomain: "linkedin-clone-54537.firebaseapp.com",
    projectId: "linkedin-clone-54537",
    storageBucket: "linkedin-clone-54537.appspot.com",
    messagingSenderId: "205174776846",
    appId: "1:205174776846:web:32e7db6ebac483a8abc85f",
    measurementId: "G-6M6TYXPT0C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;