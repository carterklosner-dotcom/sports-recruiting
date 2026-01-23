// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXrvYmnj8ph2Li3YvPhUlr1DmjN-7sQXY",
  authDomain: "game-town-e9880.firebaseapp.com",
  projectId: "game-town-e9880",
  storageBucket: "game-town-e9880.firebasestorage.app",
  messagingSenderId: "326016055584",
  appId: "1:326016055584:web:005d9a27584a6187533f45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function selectRole(role) {
  localStorage.setItem("role", role);
  window.location.href = "sport.html";
}

function selectSport(sport) {
  localStorage.setItem("sport", sport);
  const role = localStorage.getItem("role");

  if (role === "player") {
    window.location.href = "player.html";
  } else {
    window.location.href = "recruiter.html";
  }
}

function savePlayer() {
  const player = {
    name: document.getElementById("name").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    position: document.getElementById("position").value,
    sport: localStorage.getItem("sport")
  };

  let players = JSON.parse(localStorage.getItem("players")) || [];
  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));

  alert("Profile saved!");
}

function searchPlayers() {
  const position = document.getElementById("searchPosition").value;
  localStorage.setItem("searchPosition", position);
  window.location.href = "results.html";
}

window.onload = function () {
  if (document.getElementById("results")) {
    const players = JSON.parse(localStorage.getItem("players")) || [];
    const position = localStorage.getItem("searchPosition");
    const sport = localStorage.getItem("sport");

    const filtered = players.filter(
      p => p.position === position && p.sport === sport
    );

    const div = document.getElementById("results");
    filtered.forEach(p => {
      div.innerHTML += `<p>${p.name} - ${p.height} / ${p.weight}</p>`;
    });
  }
};
