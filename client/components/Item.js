export default function Item(item) {
  const row = `
  <tr>
    <td class="border px-4 py-2"></td>
    <td class="border px-4 py-2"></td>
    <td class="border px-4 py-2"></td>
    <td class="border px-4 py-2"></td>
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
