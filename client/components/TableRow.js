export default function TableRow(item, i) {
  const bg = i % 2 !== 0 ? "bg-gray-200" : "";
  return `
  <div class="tcell ${bg}">${item.id}</div>
  <div class="tcell ${bg}">${item.category}</div>
  <div class="tcell ${bg}">${item.product_name}</div>
  <div class="tcell ${bg}">${item.description}</div>
  <div class="tcell ${bg}">$${
    item.purchase_price ? item.purchase_price.toLocaleString() : ""
  }</div>
  <div class="tcell ${bg}">$${
    item.sales_price ? item.sales_price.toLocaleString() : ""
  }</div>
  <div class="tcell ${bg}">${
    (typeof item.purchase_price === "number") &
    (typeof item.sales_price === "number")
      ? (item.sales_price - item.purchase_price) / item.sales_price
      : ""
  }%</div>
  <div class="tcell ${bg}">${item.location}</div>
  <div class="tcell ${bg} flex-1 text-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 my-px rounded w-20">Edit</button>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 my-px rounded w-20">Delete</button>
  </div>
  `;
}
