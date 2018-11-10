import * as firebase from "firebase";
//import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyBp2ZJ1h_JcYvKHSoo2U6pdOUeiFzU5Nfs",
  authDomain: "crud-test-557d3.firebaseapp.com",
  databaseURL: "https://crud-test-557d3.firebaseio.com",
  projectId: "crud-test-557d3",
  storageBucket: "crud-test-557d3.appspot.com",
  messagingSenderId: "219831750307"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
