export default function TableRow(item) {
  return `
  <div class="tcell">${item.id}</div>
  <div class="tcell">Test Item</div>
  <div class="tcell">${item.name}</div>
  <div class="tcell">${item.description}</div>
  <div class="tcell">Test Item</div>
  <div class="tcell">${item.price}</div>
  <div class="tcell">Test Item</div>
  <div class="tcell">Test Item</div>
  <div class="tcell flex-1 text-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 my-px rounded w-20">Edit</button>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 my-px rounded w-20">Delete</button>
  </div>
  `;
}
