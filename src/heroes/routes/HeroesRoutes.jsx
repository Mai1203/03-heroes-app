import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage, HomePage } from '../pages';


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
            <Route path="hero" element={<HeroPage />}/>

            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
   </>
  )
}
