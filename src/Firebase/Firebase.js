import app from 'firebase/app'

const config = {
    apiKey: "AIzaSyDB0-BDOI5zPV7M5wIIsmJeJEDgHTInxP4",
    authDomain: "quickstart-1552942897438.firebaseapp.com",
    databaseURL: "https://quickstart-1552942897438.firebaseio.com",
    projectId: "quickstart-1552942897438",
    storageBucket: "",
    messagingSenderId: "251016832571",
    appId: "1:251016832571:web:21a148bec42c2bb44c1e1e",
    measurementId: "G-ZQRFW7M3E6"
}

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase
