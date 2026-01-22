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
