const firebaseConfig = {
  apiKey: "AIzaSyAmCKAQRonqoTghpXobUBDjOcAdtpRMhvc",
  authDomain: "room-visitor-count.firebaseapp.com",
  databaseURL: "https://room-visitor-count-default-rtdb.firebaseio.com",
  projectId: "room-visitor-count",
  storageBucket: "room-visitor-count.firebasestorage.app",
  messagingSenderId: "1039248663987",
  appId: "1:1039248663987:web:0b9c0bff1f56c840d717c6"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//chart variable
let activityChart = null;
let chartInitialize = false;
let chartData = {
    label: [],
    entries: [],
    exits: [],
    currentCount: []
}

//activity data store
let activityHistory = [];
let isDataLoaded = false;