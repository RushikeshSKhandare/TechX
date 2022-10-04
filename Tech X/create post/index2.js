
const firebaseConfig = {
  apiKey: "AIzaSyAnYha1sCm0LSUtUtN4jK_VpwZ1MdFrhEg",
  authDomain: "techx-e7500.firebaseapp.com",
  projectId: "techx-e7500",
  storageBucket: "techx-e7500.appspot.com",
  messagingSenderId: "480045903025",
  appId: "1:480045903025:web:0627b98b5fbabc31f88690",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

console.log(firebase);


//Load Our Webcam

// Webcam.set({
//     width: 320,
//     height: 240,
//     image_format: 'jpeg',
//     jpeg_quality: 90
// });
// Webcam.attach("camera");

// function take_snapshot(){

// }
// camera = document.getElementById("camera");

// var files = [];

// let camera = document.getElementById("video");

// if (navigator.mediaDevices.getUserMedia) {
//      navigator.mediaDevices.getUserMedia ({video:true})
//      .then (function(s){
//         console.log("yes");
//      });

//     } else {
//         console.log("No");
//     }
    
// function handleimg(){
//     let myfile = document.getElementById("myfile");
//     console.log("img",myfile.value)
// }

// let camera_button = document.querySelector("#start-camera");
// let video = document.querySelector("#video");
// let click_button = document.querySelector("#click-photo");
// let canvas = document.querySelector("#canvas");

// camera_button.addEventListener('click', async function() {
//    	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
// 	video.srcObject = stream;
// });

// click_button.addEventListener('click', function() {
//    	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//    	let image_data_url = canvas.toDataURL('image/jpeg');

//    	// data url of the image
//    	console.log(image_data_url);
// });
