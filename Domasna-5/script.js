fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    todos = users;
    console.log(users);
    renderCard(todos);
  })
  .catch((error) => {
    console.log("Ima greska", error);
    document.getElementById("container-3").innerHTML =
      '<p style="color: green;"><strong>Failed to fetch data. Please try again.</strong></p>';
  })
  .finally(() => console.log("Uspesno"));

let todos = [];

function renderCard(todos) {
  const todosContainer = document.getElementById("container-3");
  todosContainer.innerHTML = "";

  todos.forEach((todo) => {
    const card = document.createElement("div");
    const imeH1 = document.createElement("h1");
    const phone = document.createElement("p");
    const address = document.createElement("p");
    const company = document.createElement("p");

    imeH1.innerText = todo.name;
    phone.innerText = "Phone: " + todo.phone;
    address.innerText = "City: " + todo.address.city;
    company.innerText = "Company: " + todo.company.name;

    card.classList.add("card-1");

    const cardArray = [imeH1, phone, address, company];
    cardArray.forEach((el) => el.classList.add("paragraph"));

    card.appendChild(imeH1);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(company);
    todosContainer.appendChild(card);
  });
}

const darkModeToggle = document.getElementById("darkModeButton");

darkModeToggle.addEventListener("click", () => {
  const userConfirmed = confirm("Dali sakas da smenis mode?");

  if (!userConfirmed) {
    alert("Promenata e otkazana.");
    return;
  }

  const isDark = document.body.classList.contains("dark-mode");

  document.body.classList.toggle("dark-mode");

  if (isDark) {
    alert("Dark mode e iskluchen! (Bright mode e uklucen)");
  } else {
    alert("Dark mode e uklucen!");
  }
});

const pText = document.getElementsByClassName("p-text");
for (let i = 0; i < pText.length; i++) {
  pText[i].style.fontFamily = "Arial, sans-serif";
}

const uButtonToggle = document.getElementById("u-Button");

uButtonToggle.addEventListener("click", () => {
  const paragraph = document.querySelectorAll(".p-text");
  paragraph.forEach((para) => {
    para.classList.toggle("p-text");
  });
});

const btns = document.querySelectorAll(".container-1-button");

btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.classList.add("btn-hover");
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("btn-hover");
  });

  btn.addEventListener("click", () => {
    btn.classList.add("btn-click");
    setTimeout(() => {
      btn.classList.remove("btn-click");
    }, 50);
  });
});

const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

let todosArray = [];

addTodoBtn.addEventListener("click", () => {
  const title = todoInput.value.trim();
  if (title === "") return;

  const newTodo = {
    title: title,
    completed: false,
  };

  todosArray.push(newTodo);
  renderTodos();
  todoInput.value = "";
});

function renderTodos() {
  todoList.innerHTML = "";

  todosArray.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    if (todo.completed) todoItem.classList.add("completed");
    todoItem.innerText = todo.title;

    todoItem.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });

    todoList.appendChild(todoItem);
  });
}
