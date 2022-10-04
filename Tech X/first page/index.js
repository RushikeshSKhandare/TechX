
  
  
   const firebaseConfig = {
    apiKey: "AIzaSyAnYha1sCm0LSUtUtN4jK_VpwZ1MdFrhEg",
    authDomain: "techx-e7500.firebaseapp.com",
    projectId: "techx-e7500",
    storageBucket: "techx-e7500.appspot.com",
    messagingSenderId: "480045903025",
    appId: "1:480045903025:web:0627b98b5fbabc31f88690"
  };
  
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
      // const db = app.firestore();
      const auth = app.auth();
    console.log(auth)

    // This Function Is For Google signIn Authintication

function googleSignin() {
  const provider = new firebase.auth.GoogleAuthProvider();
   
   auth.signInWithPopup(provider).then(function(result) {
      // var token = result.credential.accessToken;
      // var user = result.user;
		
      // console.log(token)
      console.log(result)
   }).catch(function(error) {
      // var errorCode = error.code;
      // var errorMessage = error.message;
		
      console.log("err",error)
      // console.log("errmessge",error.message)
   });
}

  // This Function Is For Facebook signIn Authintication

function facebookSignin() {
const provider = new firebase.auth.FacebookAuthProvider();


auth.signInWithPopup(provider).then(function(result) {
   
      // var token = result.credential.accessToken;
      // var user = result.user;
		
      // console.log(token)
      console.log(result)

   }).catch(function(error) {
      // console.log(error.code);
      console.log(error);
   });
}