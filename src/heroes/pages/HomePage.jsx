import { HeroList } from "../components";
import { heroes } from "../data/heroes";
import "../styles";

export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <h1>Lista de Héroes</h1>
        <HeroList heroes={heroes} />
      </div>
    </>
  );
};
