import { useState } from "react";
import { SearchBar, HeroList } from "../components";
import { heroes } from "../data/heroes";

export const SearchPage = () => {
  const [filter, setFilter] = useState("");

  const filteredHeroes = heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="home-page">
        <h1>Busca un Héroe</h1>
        <SearchBar setFilter={setFilter} />
        <HeroList heroes={filteredHeroes} />
      </div>
    </>
  );
};
