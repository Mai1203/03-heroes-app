import axios from 'axios';

const API_KEY = '99a06cb8b259577f5fb7e5212a8ed50f';
const BASE_URL = `https://www.superheroapi.com/api.php/`;

export const fetchHeroData = async (heroName) => {

  try {
    const response = await axios.get(`${BASE_URL}${API_KEY}/search/${heroName}`);

    if (response.data.response === 'success' && response.data.results.length > 0) {
      const hero = response.data.results[0]; 
      return {
        imageUrl: hero.image.url,
        fullName: hero.biography['full-name'] || 'No disponible',
        alterEgos: hero.biography['alter-egos'] || 'No disponible',
        aliases: hero.biography.aliases || [],
        placeOfBirth: hero.biography['place-of-birth'] || 'No disponible',
        firstAppearance: hero.biography['first-appearance'] || 'No disponible',
        publisher: hero.biography.publisher || 'No disponible',
        alignment: hero.biography.alignment || 'No disponible',
      };
    } else {
      console.log('No se encontró el héroe o hubo un error en la respuesta.');
      return {
        imageUrl: '/assets/perrito_heroe.png',
        fullName: 'Héroe no encontrado',
        alterEgos: 'No disponible',
        aliases: [],
        placeOfBirth: 'No disponible',
        firstAppearance: 'No disponible',
        publisher: 'No disponible',
        alignment: 'No disponible',
      };
    }
  } catch (error) {
    console.error('Error al obtener datos del héroe:', error);
    return { imageUrl: '/assets/perrito_heroe.png', description: 'Descripción no disponible' };
  }
};