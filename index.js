import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCM7c6SVND2WeVBgKOytPEaML056AY26DY",
  authDomain: "birdoneofficial.firebaseapp.com",
  projectId: "birdoneofficial",
  storageBucket: "birdoneofficial.appspot.com",
  messagingSenderId: "79936447627",
  appId: "1:79936447627:web:8a7f270de2bd1c3f6fa08e",
  measurementId: "G-WEKJQHYJ1D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);