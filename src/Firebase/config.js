// Import the functions you need from the SDKs you need
import firebase, {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHGzr5WEmT0AcKdfdgkWkOotOsNGuWxSM',
  authDomain: 'firegram-react-fe942.firebaseapp.com',
  projectId: 'firegram-react-fe942',
  storageBucket: 'firegram-react-fe942.appspot.com',
  messagingSenderId: '829426073875',
  appId: '1:829426073875:web:9c750bca5f0c57a19f5ae6',
  measurementId: 'G-YR21DKBCVG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();

export {appStorage, appFirestore};
