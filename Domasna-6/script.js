let fetchedBooks = [];
let ascending = true;


fetch("https://gutendex.com/books/?page=1")
  .then(res => res.json())
  .then(data => {
    fetchedBooks = data.results;
    renderBooks(fetchedBooks);
  })
  .catch(() => {
    document.getElementById("main-table").innerHTML =
      "<tr><td colspan='4'>Failed to fetch data</td></tr>";
  });


function renderBooks(books) {
  const table = document.getElementById("main-table");
  table.innerHTML = "";

  books.forEach(book => {
    const tr = document.createElement("tr");
    tr.dataset.id = book.id || Date.now();

    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.authors.map(a => a.name).join(", ")}</td>
      <td>${book.bookshelves[0] || "N/A"}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    table.appendChild(tr);
  });
}


function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const category = document.getElementById("category").value.trim();

  if (!title || !author) {
    alert("Title and Author are required");
    return;
  }

  const newBook = {
    title,
    authors: [{ name: author }],
    bookshelves: [category]
  };

  fetchedBooks.unshift(newBook);
  renderBooks(fetchedBooks);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("category").value = "";
}


document.getElementById("main-table").addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    const row = e.target.closest("tr");
    row.remove();
  }
});


document.getElementById("title-header").addEventListener("click", () => {
  fetchedBooks.sort((a, b) =>
    ascending
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  ascending = !ascending;
  renderBooks(fetchedBooks);
});


document.getElementById("darkModeButton").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
