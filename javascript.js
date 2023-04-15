const inputText = document.querySelector("#add-book input");
const link = document.querySelector(".button");
const ul = document.querySelector("ul");
const spanDelete = `<span class="delete">حذف</span>`;
// const spanDelete = document.createElement('span');
// spanDelete.className = 'delete';
// spanDelete.textContent = 'حذف';
const checkBox = document.querySelector("#hide input");
const inputSearch = document.querySelector("#search-books input");

link.addEventListener("click", function (e) {
  const spanName = document.createElement("span");
  spanName.className = "name";
  spanName.textContent = inputText.value;

  const li = document.createElement("li");
  li.appendChild(spanName);
  li.innerHTML += spanDelete;
  // li.appendChild(spanDelete);

  ul.appendChild(li);

  storeTolocalStorage(inputText.value);

  inputText.value = "";
  e.preventDefault();
});

ul.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    e.target.parentElement.remove();

    removeFromlocalStorage(e.target.parentElement.children[0].textContent);
  }
});

checkBox.addEventListener("change", function (e) {
  if (checkBox.checked === true) {
    ul.style.display = "none";
  } else {
    ul.style.display = "initial";
  }
});

inputSearch.addEventListener("keyup", function (e) {
  for (let book of ul.children) {
    if (book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function (e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let item of tasks) {
    const spanName = document.createElement("span");
    spanName.className = "name";
    spanName.textContent = item;

    const li = document.createElement("li");
    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    // li.appendChild(spanDelete);

    ul.appendChild(li);
  }
});

function storeTolocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  tasks.push(task);

  localStorage.setItem("tasks", tasks);
}

function removeFromlocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      tasks.splice(i, 1);
    }
  }

  if (tasks.length === 0) {
    localStorage.removeItem("tasks");
  } else {
    localStorage.setItem("tasks", tasks);
  }
}

console.log("aliiiiiiiiiiiii");
