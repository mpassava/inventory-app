import TableData from "./utils/TableData.js";
import TableHeader from "./components/TableHeader.js";
import TableRow from "./components/TableRow.js";

class App {
  constructor() {
    this.itemTable = document.getElementById("table");
    this.tableData = {};
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await this.fetchTableData();
      this.renderItems(this.tableData);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchTableData() {
    this.tableData = new TableData();
    await this.tableData.fetch();
  }

  renderItems(data) {
    console.log(data);
    const header = TableHeader(data.headers);
    this.itemTable.innerHTML += header;

    data.products.forEach((item, i) => {
      const tableRow = TableRow(item, i);
      this.itemTable.innerHTML += tableRow;
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  new App()
});
