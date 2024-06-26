import GridContainer from "./grid-container/grid-container";

document.addEventListener("DOMContentLoaded", () => {
  const grid = new GridContainer(document.querySelector(".grid-container"));
  grid.generateGrid(4, 4);

  function generateid() {
    return Math.floor(Math.random() * 15);
  }

  function randomMob() {
    const mob = document.querySelector(".mob");
    const gridItem = document.querySelectorAll(".grid-item");

    if (mob) {
      mob.classList.remove("mob");
      let n = generateid();
      gridItem[n].classList.add("mob");
    } else {
      let n = generateid();
      gridItem[n].classList.add("mob");
    }
  }

  const interval = setInterval(() => {
    randomMob();
  }, 1000);
});
