const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const user = JSON.parse(localStorage.getItem(LOGGED_USER));
if (!user) window.location.href = "login.html";
document.getElementById("userBubble").innerText = user.username[0];

let show = {};
let episodes = [];
let cast = [];

fetch(`${API_BASE}/shows/${id}`)
  .then((res) => res.json())
  .then((res) => {
    show = res;
    renderShow();
  });

function renderShow() {
  const div = document.getElementById("show-container");
  div.innerHTML = `
    <h1>${show.name}</h1>
    <img src="${show.image.medium}">
    <p>${show.summary}</p>
  `;
}

fetch(`${API_BASE}/shows/${id}/episodes`)
  .then((res) => res.json())
  .then((res) => {
    episodes = res;
    renderEpisodes();
  });

function renderEpisodes() {
  const grid = document.getElementById("episodes-grid");

  episodes.forEach((ep) => {
    const card = document.createElement("div");
    card.className = "episode-card";

    card.innerHTML = `
      <h3>${ep.name}</h3>
      ${ep.image ? `<img src="${ep.image.medium}">` : ""}
      <p>${ep.summary || ""}</p>
    `;

    grid.appendChild(card);
  });
}

fetch(`${API_BASE}/shows/${id}/cast`)
  .then((r) => r.json())
  .then((r) => {
    cast = r;
    renderCast();
  });

function renderCast() {
  const grid = document.getElementById("cast-grid");

  cast.forEach((c) => {
    const card = document.createElement("div");
    card.className = "cast-card";

    card.innerHTML = `
      <img src="${c.person.image?.medium}">
      <h3>${c.person.name}</h3>
      <p>${c.character.name}</p>
    `;
    grid.appendChild(card);
  });
}

function logout() {
  localStorage.removeItem(LOGGED_USER);
  window.location.href = "landing.html";
}
