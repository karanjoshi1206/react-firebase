import firebase from "firebase";
import "firebase/database";
var firebaseConfig = {
	apiKey: "AIzaSyA3lQKtsex3buJ8s4C4G-_mFgGzbe-_xm4",
	authDomain: "react--clone-f0484.firebaseapp.com",
	databaseURL: "https://react--clone-f0484-default-rtdb.firebaseio.com",
	projectId: "react--clone-f0484",
	storageBucket: "react--clone-f0484.appspot.com",
	messagingSenderId: "911017702085",
	appId: "1:911017702085:web:af77fe3b3b73bcb43d76ac",
	measurementId: "G-LRVS45V9RZ",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// firebase.analytics();

export default fireDb.database().ref();
