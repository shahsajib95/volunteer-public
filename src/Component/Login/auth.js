import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../Configs/firebase.config";

export const initializeFirebaseApp = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}


export const googleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res=>{
            
        const {displayName, email} = res.user;
        const name = displayName; 
            const firstName = name.split(' ')[0];
        const googleUser ={
            name: firstName,
            email: email,
        }
        return googleUser;
       }
    )
}

export const userToken = () =>{
    return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
        return sessionStorage.setItem('token', idToken)
      }).catch(function(error) {
        // Handle error
      });
}