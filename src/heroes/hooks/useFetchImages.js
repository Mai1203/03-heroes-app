import { useState, useEffect } from 'react';
import { fetchImages } from '../api';

const useFetchImages = (heroName) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeroImage = async () => {
      try {
        const url = await fetchImages(heroName);
        setImageUrl(url);
      } catch (err) {
        setError('No se pudo cargar la imagen');
      } finally {
        setLoading(false);
      }
    };
    getHeroImage();
  }, [heroName]);

  return { imageUrl, loading, error };
};

export default useFetchImages;
