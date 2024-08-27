let statusIs = document.querySelector("h3");
let btn = document.querySelector("#add");

let flag = 0;

btn.addEventListener("click", () => {
  if (flag == 0) {
    statusIs.innerHTML = "Friends";
    statusIs.style.color = "cadetblue";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "#dadada";
    btn.style.color = "black";
    flag = 1;
  } else {
    statusIs.innerHTML = "Stranger";
    statusIs.style.color = "cornflowerblue";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "cadetblue";
    btn.style.color = "white";
    flag = 0;
  }
});
