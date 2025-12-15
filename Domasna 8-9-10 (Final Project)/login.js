document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const LOGGED_USER = "loggedUser";

  if (!username || !password) return alert("Please fill all fields");

  localStorage.setItem(LOGGED_USER, JSON.stringify({ username, password }));
  window.location.href = "index.html";
});
