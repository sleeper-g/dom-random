import './grid-container.css'
export default class GridContainer {
  constructor( element ) {
    this._element = element
  }

  generateGrid(rows, columns) {
    for (let indexRow = 0; indexRow < rows; indexRow++) {
      for (let indexColumn = 0; indexColumn < columns; indexColumn++) {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.dataset["id"] = `${rows*indexRow+indexColumn}`;
        this._element.appendChild(item);
      };
    };
  };
}
