async function getTrending() {
  const key = 'fabdbd455cf8a28d4b9bd01e2909b151';
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const filter = `?api_key=${key}`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getTrending;