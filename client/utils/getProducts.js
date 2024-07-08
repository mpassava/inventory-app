export default async function getProducts() {
  const url = 'http://localhost:3030/products';
  // list = `${list[0].toUpperCase()}${list.substring(1).toLowerCase()}`

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
