
import { HeroPublisher } from "../components";
import { heroes } from "../data/heroes";
import "../styles";

export const MarvelPage = () => {
  return (
    <>
      <div className="home-page">
        <h1>Héroes de Marvel</h1>
        <HeroPublisher heroes={heroes} publisher="Marvel Comics" />
      </div>
    </>
  );
};

export const DCPage = () => {
  return (
    <>
      <div className="home-page">
        <h1>Héroes de DC</h1>
        <HeroPublisher heroes={heroes} publisher="DC Comics" />
      </div>
    </>
  );
};
