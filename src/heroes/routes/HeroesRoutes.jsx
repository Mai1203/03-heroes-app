import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage, SearchPage, HomePage, HeroDetailPage } from '../pages';


export const HeroesRoutes = () => {
  return (
   <>
    <Navbar />
      <div className="container">
        <Routes>
            <Route path="home" element={<HomePage />}/>
            <Route path="marvel" element={<MarvelPage />}/>
            <Route path="dc" element={<DcPage />}/>

            <Route path="search" element={<SearchPage />}/>

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/hero/:heroName" element={<HeroDetailPage />} />
        </Routes>
      </div>
   </>
  )
}
