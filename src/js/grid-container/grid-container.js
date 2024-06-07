export default class GridContainer {
  constructor() {}

  generateGrid(rows, columns) {
    const container = document.querySelector(".grid-container");
    for (let indexRow = 0; indexRow < rows; indexRow++) {
      for (let indexColumn = 0; indexColumn < columns; indexColumn++) {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.innerText = `${indexRow}-${indexColumn}`;
        container.appendChild(item);

        document.addEventListener("DOMContentLoaded", () => {});
      }
    }
  }
}
