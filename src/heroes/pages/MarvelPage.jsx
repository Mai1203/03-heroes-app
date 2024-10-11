import { HeroItem, HeroList } from "../components"
import { heroes } from "../data/heroes";
import { groupHeroesByPublisher } from "../components";

export const MarvelPage = () => {
  
  const groupedHeroes = groupHeroesByPublisher(heroes);
  
  return (
    <>
    <h1>Marvel Page</h1>
    <hr />
    
  </>
  )
}
