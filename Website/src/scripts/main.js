let heading = document.querySelector("h1");

let olivia = document.getElementById("olivia");
let rhys = document.getElementById("rhys");
let michael = document.getElementById("michael");
let leo = document.getElementById("leo");
let alex = document.getElementById("alex");

olivia.onmouseenter = function () {
  heading.textContent = "Olivia";
};

olivia.onmouseleave = function () {
  heading.textContent = "Welcome.";
};

michael.onmouseenter = function () {
  heading.textContent = "Michael";
};

michael.onmouseleave = function () {
  heading.textContent = "Welcome.";
};

leo.onmouseenter = function () {
  heading.textContent = "Leo";
};

leo.onmouseleave = function () {
  heading.textContent = "Welcome.";
};

rhys.onmouseenter = function () {
  heading.textContent = "Rhys";
};

rhys.onmouseleave = function () {
  heading.textContent = "Welcome.";
};

alex.onmouseenter = function () {
  heading.textContent = "Alex";
};

alex.onmouseleave = function () {
  heading.textContent = "Welcome.";
};
