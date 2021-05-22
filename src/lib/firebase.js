import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCZs2_PEZklt6XyfK4N_7GS7GJUKmXmHrY",
    authDomain: "instagram-b51fb.firebaseapp.com",
    projectId: "instagram-b51fb",
    storageBucket: "instagram-b51fb.appspot.com",
    messagingSenderId: "566630667307",
    appId: "1:566630667307:web:0f3d795db27c7b6b20c66e"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };