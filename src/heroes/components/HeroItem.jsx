import { Link } from 'react-router-dom';
import { useFetchImages } from '../hooks';
import '../styles';

export const HeroItem = ({ heroName }) => {
  
  const { heroData, loading, error } = useFetchImages(heroName);

  return (
    <div className="hero-item">
      {loading ? (
        <p>Cargando imagen...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Link to={`/hero/${heroName}`} className="card">
          <div className="card">
            <img src={heroData.imageUrl} alt={heroName} className="card-img" />
            <div className="card-content">
              <h3 className="card-title">{heroName}</h3>
              <p className="card-description">{heroData.fullName}</p> 
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

