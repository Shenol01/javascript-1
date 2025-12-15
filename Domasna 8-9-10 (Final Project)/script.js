let shows = [];
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

const user = JSON.parse(localStorage.getItem(LOGGED_USER));
if (!user) window.location.href = "login.html";

document.getElementById("userBubble").innerText = user.username[0];

fetch(`${API_BASE}/shows`)
  .then((res) => res.json())
  .then((res) => {
    shows = res;
    renderShows(shows);
  });

function renderShows(list) {
  const container = document.getElementById("shows-container");
  container.innerHTML = "";

  list.forEach((show) => {
    const card = document.createElement("div");
    card.className = "show-card";

    card.innerHTML = `
      <img class="show-img" src="${show.image?.medium}">
      <h3>${show.name}</h3>
      <p class="rating">⭐ ${show.rating.average || "N/A"}</p>

      <button class="fav-btn ${favorites.includes(show.id) ? "active" : ""}"
        onclick="toggleFav(${show.id})">
        ${favorites.includes(show.id) ? "♥ Remove Favorite" : "♡ Add Favorite"}
      </button>

      <a class="details-btn" href="show.html?id=${show.id}">View Details</a>
    `;

    container.appendChild(card);
  });
}

function toggleFav(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((x) => x !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  renderShows(shows);
}

function filterShows() {
  const q = document.getElementById("searchInput").value.trim();

  if (!q) return renderShows(shows);

  fetch(`${API_BASE}/search/shows?q=${q}`)
    .then((res) => res.json())
    .then((res) => renderShows(res.map((x) => x.show)));
}

function logout() {
  localStorage.removeItem(LOGGED_USER);
  window.location.href = "landing.html";
}
