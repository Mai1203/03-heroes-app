
import { HeroPublisher } from "../components";
import { heroes } from "../data/heroes";
import "../styles";

export const MarvelPage = () => {
  return (
    <>
      <div className="marvel-page">
        <h1>Héroes de Marvel</h1>
        <HeroPublisher heroes={heroes} publisher="Marvel Comics" />
      </div>
    </>
  );
};

export const DCPage = () => {
  return (
    <>
      <div className="dc-page">
        <h1>Héroes de DC</h1>
        <HeroPublisher heroes={heroes} publisher="DC Comics" />
      </div>
    </>
  );
};
