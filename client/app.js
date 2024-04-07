import getItems from "./utils/getItems.js";
import TableRow from "./components/TableRow.js";


const itemTable = document.getElementById('table')

let products = [];
let productElements = [];

const renderItems = arr => {
  arr.forEach(item => {
    const tableRow = TableRow(item);
    itemTable.innerHTML += tableRow;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  // const result = await getItems('all', 'Products');
  // const data = result.json();
  const response = await fetch('../server/lib/sampleData.json');
  const data = await response.json();
  console.log(data)
  products = data;
  renderItems(products)
});
