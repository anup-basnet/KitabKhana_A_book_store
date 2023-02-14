import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDjqGpp5CYvoT3R3Ig-jE7nnXkjfjj-Iuw",
    authDomain: "kitabkhana-83ff1.firebaseapp.com",
    databaseURL: "https://kitabkhana-83ff1-default-rtdb.firebaseio.com",
    projectId: "kitabkhana-83ff1",
    storageBucket: "kitabkhana-83ff1.appspot.com",
    messagingSenderId: "915116114297",
    appId: "1:915116114297:web:1de30eee50687681f2afa8",
    measurementId: "G-QCY77M7LL0"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };