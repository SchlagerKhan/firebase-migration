const firebase = require("firebase");
require("firebase/auth");

const { FIREBASE_OPTS, user } = require("./opts");

firebase.initializeApp(FIREBASE_OPTS);

firebase
  .auth()
  .signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    console.log("Successful migration");
  })
  .catch(err => {
    console.log("Unsuccessful migration", err);
  });
