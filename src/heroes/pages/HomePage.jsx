import { useState } from "react";
import { SearchBar, HeroList } from "../components";
import "../styles";

const heroes = ["Spider-Man", "Iron Man", "Ant-man", "Hulk", "Capitan America"];

export const HomePage = () => {
  const [filter, setFilter] = useState("");

  const filteredHeroes = heroes.filter((hero) =>
    hero.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Lista de Héroes</h1>
      <SearchBar setFilter={setFilter} />
      <HeroList heroes={filteredHeroes} />
    </div>
  );
};
