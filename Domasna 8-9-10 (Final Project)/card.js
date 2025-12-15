import { FAVORITES_KEY } from "./constants.js";

export function createShowCard(
  show,
  favoriteIds = [],
  onToggleFavoriteName = "toggleFavorite"
) {
  const img =
    show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
  const rating = show.rating?.average ?? "N/A";
  const isFave = favoriteIds.includes(show.id);

  return `
    <article id="show-${show.id}" class="card ${
    isFave ? "card--fave" : ""
  }" data-id="${show.id}">
      <button class="card__fave-btn" onclick="${onToggleFavoriteName}(${
    show.id
  })" aria-label="toggle favorite" title="Toggle favorite">
        <svg class="icon icon-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .587l3.668 7.431L23 9.587l-5.667 5.52L18.335 24 12 19.897 5.665 24l1.002-8.893L1 9.587l7.332-1.569L12 .587z"/></svg>
      </button>
      <a class="card__link" href="show.html?id=${show.id}">
        <div class="card__imgwrap"><img loading="lazy" src="${img}" alt="${escapeHtml(
    show.name
  )} poster"></div>
        <div class="card__info">
          <h3 class="card__title">${escapeHtml(show.name)}</h3>
          <div class="card__meta">
            <span class="card__rating">${rating}</span>
            <span class="card__genres">${(show.genres || [])
              .slice(0, 2)
              .join(" • ")}</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function escapeHtml(text = "") {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
