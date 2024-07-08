import getProducts from "./utils/getProducts.js";
import TableRow from "./components/TableRow.js";


const itemTable = document.getElementById('table')

let products = [];
let productElements = [];

const renderItems = arr => {
  arr.forEach((item, i) => {
    const tableRow = TableRow(item, i);
    itemTable.innerHTML += tableRow;
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getProducts();
  console.log(data)
  products = data;
  renderItems(products)
});
