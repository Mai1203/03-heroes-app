import { HeroItem } from './HeroItem';

import '../styles';

export const HeroList = ({ heroes }) => {
  return (
    <div className="hero-list">
      {heroes.map(hero => (
        <HeroItem key={hero.superhero} heroName={hero.superhero} />
      ))}
    </div>
  );
};



