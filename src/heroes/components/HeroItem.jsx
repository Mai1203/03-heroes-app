import { useState, useEffect } from 'react';
import { fetchImages } from '../helpers';
import '../styles';

export const HeroItem = ({ heroName }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeroImage = async () => {
      setLoading(true);
      try {
        const url = await fetchImages(heroName);
        setImageUrl(url);
      } catch (err) {
        setError('Error al cargar la imagen');
      } finally {
        setLoading(false);
      }
    };
    getHeroImage();
  }, [heroName]);

  return (
    <div className="hero-item">
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <img src={imageUrl} alt={heroName} />
      )}
      <h3>{heroName}</h3>
    </div>
  );
};

