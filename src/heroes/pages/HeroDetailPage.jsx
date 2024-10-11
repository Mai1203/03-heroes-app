import { useParams } from "react-router-dom";
import { useFetchImages } from "../hooks";
import '../styles'; 

export const HeroDetailPage = () => {
  const { heroName } = useParams(); 

  const { heroData, loading, error } = useFetchImages(heroName);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="hero-detail">
      {heroData && (
        <div className="hero-content">
          <img src={heroData.imageUrl} alt={heroName} className="hero-image" onError={(e) => { e.target.onerror = null; e.target.src = 'assets/perrito_heroe.png'; }}/>
          <div className="hero-info">
            <h1>{heroName}</h1>
            <p><strong>Nombre completo:</strong> {heroData.fullName}</p>
            <p><strong>Alter egos:</strong> {heroData.alterEgos}</p>
            <p><strong>Alias:</strong> {heroData.aliases.join(', ') || 'Ninguno'}</p>
            <p><strong>Lugar de nacimiento:</strong> {heroData.placeOfBirth}</p>
            <p><strong>Primera aparición:</strong> {heroData.firstAppearance}</p>
            <p><strong>Editorial:</strong> {heroData.publisher}</p>
            <p><strong>Alineación:</strong> {heroData.alignment}</p>
          </div>
        </div>
      )}
    </div>
  );
};
