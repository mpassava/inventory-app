export default function TableHeader(headersArr) {
  console.log(headersArr);
  const headers = headersArr.map(header => {
    const words = header.split("_");
    words.forEach((_, i) => {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    });
    return words.join(" ");
  });

  return `
    ${headers
      .map((header) => `<strong class="tcell bg-gray-300">${header}</strong>`)
      .join("")}
    <strong class="tcell flex-1 text-center bg-gray-300">Actions</strong>
  `;
}
