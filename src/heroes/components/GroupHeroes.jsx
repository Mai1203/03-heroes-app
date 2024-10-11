
export const groupHeroesByPublisher = (heroes) => {
  const groupedHeroes = {
    Marvel: [],
    DC: [],
    Others: [],
  };

  heroes.forEach(hero => {
    if (hero.publisher === 'Marvel Comics') {
      groupedHeroes.Marvel.push(hero);
    } else if (hero.publisher === 'DC Comics') {
      groupedHeroes.DC.push(hero);
    } else {
      groupedHeroes.Others.push(hero);
    }
  });

  return groupedHeroes;
};
