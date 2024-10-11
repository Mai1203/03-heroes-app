import { useState, useEffect } from 'react';
import { fetchHeroData } from '../helpers';

export const useFetchImages = (heroName) => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeroData = async () => {
      setLoading(true);
      try {
        const data = await fetchHeroData(heroName);
        setHeroData(data);
      } catch (err) {
        setError('Error al cargar los datos del héroe.');
      } finally {
        setLoading(false);
      }
    };

    getHeroData();
  }, [heroName]);

  return { heroData, loading, error };
};

