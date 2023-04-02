import { Route, Routes } from "react-router-dom";

import { FilmsItemPage } from './../pages/FilmsItemPage/FilmsItemPage';
import { BestFilmsPage } from '../pages/BestFilmsPage/BestFilmsPage';
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { routes } from './routes';


export const Router: React.FC = () => {
    return <Routes>
        <Route path={routes.root} element={<SearchPage />} />
        <Route path={routes.search} element={<SearchPage />} />
        <Route path={routes.bestFilms} element={<BestFilmsPage />} />
        <Route path={routes.filmsItem} element={<FilmsItemPage />} />
        <Route path='*' element={<h1>404</h1>} />
    </Routes>;
};
