import { Routes, Route } from "react-router-dom";
import { FilmsPage } from "../pages/FilmsPage/FilmsPage";
import { routes } from './routes';
import { BestFilmsPage } from '../pages/BestFilmsPage/BestFilmsPage';
import { FilmsItemPage } from './../pages/FilmsItemPage/FilmsItemPage';


export const Router: React.FC = () => {
    return <Routes>
        <Route path={routes.root} element={<h1>HOME</h1>} />
        <Route path={routes.films} element={<FilmsPage />} />
        <Route path={routes.bestFilms} element={<BestFilmsPage />} />
        <Route path={routes.filmsItem} element={<FilmsItemPage />} />
        <Route path='*' element={<h1>404</h1>} />
    </Routes>;
};
