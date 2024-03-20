export default function renderItems() {
  const item = `
  <tr>
    <td class="border px-4 py-2">1</td>
    <td class="border px-4 py-2">Product 1</td>
    <td class="border px-4 py-2">Category A</td>
    <td class="border px-4 py-2">10</td>
    <td class="border px-4 py-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
        Edit
      </button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
        Delete
      </button>
    </td>
  </tr>
  `;
}
