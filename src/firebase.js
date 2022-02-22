import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {
    getFirestore, collection, getDocs, addDoc, onSnapshot
} from 'firebase/firestore'

// Initialize firebase app
const app = firebase.initializeApp({
    apiKey: "AIzaSyBc1493dipotvFc45We4Si4Rdm_YpjtMq8",
    authDomain: "quizzy-8a1db.firebaseapp.com",
    projectId: "quizzy-8a1db",
    storageBucket: "quizzy-8a1db.appspot.com",
    messagingSenderId: "836854723636",
    appId: "1:836854723636:web:d919c166a4a0ed4b734661"
})

// Initialize services
const db = getFirestore()

// Collection reference
const colRef = collection(db, 'users')

// Realtime collection data
onSnapshot(colRef, (snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    console.log(users)
})

const auth = app.auth()

export {firebase, auth, colRef}
