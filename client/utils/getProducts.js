export default async function getProducts() {
  const url = 'http://localhost:3030/products';

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
