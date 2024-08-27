let container = document.querySelector("#container");
let react = document.querySelector("i");

container.addEventListener("dblclick", function () {
  react.style.transform = "translate(-50%, -50%) scale(1)";
  react.style.opacity = 0.9;

  setTimeout(function () {
    react.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    react.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
