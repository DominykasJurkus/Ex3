import * as firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyDBU-5caEB2dU2t-NVcU7givzs19tf1Avk",
    authDomain: "ads-app-hma.firebaseapp.com",
    databaseURL: "https://ads-app-hma.firebaseio.com",
    projectId: "ads-app-hma",
    storageBucket: "ads-app-hma.appspot.com",
    messagingSenderId: "266226522618",
    appId: "1:266226522618:web:f8324898fc4c879148ec43"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase