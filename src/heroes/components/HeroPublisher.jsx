import { HeroItem } from "./HeroItem";

export const HeroPublisher = ({ heroes, publisher }) => {

  const filteredHeroes = heroes.filter(hero => hero.publisher === publisher);

  return (
    <div className="hero-list">
      {filteredHeroes.map(hero => (
        <HeroItem key={hero.id} heroName={hero.superhero} />
      ))}
    </div>
  );
};