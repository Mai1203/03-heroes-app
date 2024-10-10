import axios from 'axios';

const API_KEY = 'T2-l07OCv5UQjUZtXZhZEXPNmL6aFJdYRBUQsNJnzfY';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (heroName) => {
  const response = await axios.get(`${BASE_URL}?query=${heroName}&client_id=${API_KEY}`);
  const { results } = response.data;
  return results.length > 0 ? results[0].urls.small : 'perrito_heroe.png';
};
