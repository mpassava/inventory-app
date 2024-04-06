export default async function getItems(query, list) {
  const url = 'http://localhost/3030/query';
  list = list.tolowercase();
  list = `${list[0].toUpperCase()}+${list.substring(1)}`

  if (query.tolowercase() === "all") {
    query = `SELECT * FROM ${list};`;
  }

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }

  const request = new Request(url, options);

  const response = await fetch(request);
  const data = await response.json();
  return data;
}
