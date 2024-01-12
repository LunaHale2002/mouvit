import "./style.css";

const carre = document.querySelector("#carre");
const btnMoins = document.querySelector("#btnMoins");
const speedSpan = document.querySelector("#speedSpan");
const btnPLus = document.querySelector("#btnPlus");
const menu = document.querySelector(".menu")

// let positionX = 0;
// let positionY = 0;
let speed = 1;
let position = {x: 0, y: 0};
let closed = true;

btnMoins.addEventListener('click', () => {
  if(speed > 1) {
    speed--;
  }
  speedSpan.textContent = speed;
})
btnPLus.addEventListener('click', () => {
  if(speed < 9) {
    speed++;
  }
  speedSpan.textContent = speed;
})

window.addEventListener("keydown", (e) => {
  switch(e.key) {
    case "ArrowUp":
      if (closed) position.y -= 20;
      break;
    case "ArrowDown":
      if (closed) position.y += 20;
      break;
    case "ArrowLeft":
      if (closed) position.x -=20;
      break;
    case "ArrowRight":
      if (closed) position.x +=20;
      break;
    case "Escape":
      menu.classList.toggle("hide");
      closed = !closed;
      break;
    default:
      console.log("DON'T MOVE!!!");
  }
  setTimeout(() => {
    carre.style.top = position.y + "px";
    carre.style.top = position.x + "px";
  }, 1000 - speed * 10);
});