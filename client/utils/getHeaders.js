export default async function getHeaders() {
  const url = 'http://localhost:3030/products/headers';

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
