// Rendezhető táblázat Adott egy táblázat az oldalon. JavaScript segítségével tedd lehetővé, hogy az oszlopok fejlécére kattintva a táblázat az adott oszlop szerint rendezve jelenjen meg!
class SortableTable {
  constructor(table) {
    this.table = table;

    this.table.addEventListener("click", this.sortTable);
  }

  sortTable = (event) => {
    if (event.target.tagName != "TH") return;

    const headers = Array.from(event.target.parentNode.children);
    const colIndex = headers.indexOf(event.target);
    const tableBody = this.table.querySelector("tbody");

    const compare = (a, b) => {
      const aCellText = a.children[colIndex].innerText;
      const bCellText = b.children[colIndex].innerText;
      if (aCellText < bCellText) return -1;
      if (aCellText > bCellText) return 1;
      return 0;
    };
    const sortedChildren = Array.from(tableBody.children).sort(compare);
    tableBody.innerHTML = "";
    sortedChildren.forEach((row) => tableBody.appendChild(row));
  };
}

new SortableTable(document.querySelector("table"));
