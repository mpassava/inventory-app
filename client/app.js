import getItems from "./utils/getItems.js";
import Item from "./components/Item.js";

const itemTable = document.getElementById('table')

let products = [];

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getItems('all', 'Products');
  const data = result.json();
  console.log(data)
  products = data;
});
