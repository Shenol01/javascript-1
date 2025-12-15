let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

const user = JSON.parse(localStorage.getItem(LOGGED_USER));
if (!user) window.location.href = "login.html";

document.getElementById("userBubble").innerText = user.username[0];

async function loadFavorites() {
  const container = document.getElementById("favorites-container");
  container.innerHTML = "";

  for (let id of favorites) {
    const show = await fetch(`${API_BASE}/shows/${id}`).then((res) =>
      res.json()
    );

    const card = document.createElement("div");
    card.className = "show-card";

    card.innerHTML = `
      <img class="show-img" src="${show.image.medium}">
      <h3>${show.name}</h3>
      <p class="rating">⭐ ${show.rating.average}</p>

      <button class="fav-btn active" onclick="toggleFav(${show.id})">
        ♥ Remove Favorite
      </button>

      <a class="details-btn" href="show.html?id=${show.id}">View Details</a>
    `;

    container.appendChild(card);
  }
}

function toggleFav(id) {
  favorites = favorites.filter((x) => x !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  loadFavorites();
}

loadFavorites();

function logout() {
  localStorage.removeItem(LOGGED_USER);
  window.location.href = "landing.html";
}
