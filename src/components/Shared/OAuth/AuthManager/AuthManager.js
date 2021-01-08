import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../../configs/firebase.config";

export const firebaseConfigInitialize = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};
//signup with email and password
export const signUpWithEmail = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = {
        isSigned: true,
        error: "",
      };
      updateUser(name);
      verifyEmail();
      return newUser;
    })
    .catch((error) => {
      const newUser = {
        isSigned: false,
        error: error.message,
      };
      return newUser;
    });
};
//update user name
const updateUser = (name) => {
  let user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name,
  });
};
//verify email address
const verifyEmail = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    alert("please verify your email");
  });
};
//signIn with email and password
export const signInWithEmail = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { email, displayName, emailVerified } = res.user;
      const verifiedUser = {
        emailVerify: emailVerified,
        email: email,
        name: displayName,
      };
      return verifiedUser;
    })
    .catch((err) => {
      const error = {
        error: err.message,
      };
      return error;
    });
};
//reset password
export const resetPassword = (email) => {
  const auth = firebase.auth();
  const emailAddress = email;
  auth.sendPasswordResetEmail(emailAddress).then(function () {
    alert("reset password send your email");
  });
};
//google login
export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const signedInInfo = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      return signedInInfo;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};
//facebook login
export const facebookSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const signedInInfo = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      return signedInInfo;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};
