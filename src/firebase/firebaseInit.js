import firebase from "firebase/compat/app";

const firebaseInit = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyBg-fWR58S-zg7HfYmT3AnmUvU49zF6vP8",
        authDomain: "my-app-d44a2.firebaseapp.com",
        projectId: "my-app-d44a2",
        storageBucket: "my-app-d44a2.appspot.com",
        messagingSenderId: "810331058209",
        appId: "1:810331058209:web:ec2cfc01ee10d2a4c17360",
        measurementId: "G-2VBZYCRLP5"
    });
}

export default firebaseInit