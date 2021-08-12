import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXYOq1rbYuSF0fgiO2oBhH5K5Br44dT9w",
    authDomain: "jxos-web.firebaseapp.com",
    projectId: "jxos-web",
    storageBucket: "jxos-web.appspot.com",
    messagingSenderId: "949311978285",
    appId: "1:949311978285:web:c77e70d5a79f0b834cf1a4",
    measurementId: "G-R07BVCL0XH"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app()

const db = app.firestore();


export {db}