export default function Item(item) {
  return `
    <ul class="flex flex-col">
      <li class="flex bg-gray-200">
        <div class="px-3 py-2 w-1/8">${item.id}</div>
        <div class="px-3 py-2 w-1/8">${item.name}</div>
        <div class="px-3 py-2 w-1/8">${item.description}</div>
        <div class="px-3 py-2 w-1/8"></div>
        <div class="px-3 py-2 w-1/8">${item.price}</div>
        <div class="px-3 py-2 w-1/8"></div>
        <div class="px-3 py-2 w-1/8"></div>
        <div class="flex-1 px-3 py-2 text-right">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Edit
          </button>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
            Delete
          </button>
        </div>
      </li>
    </ul>
  `;
}
