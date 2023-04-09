import { Route, Routes } from "react-router-dom";

import { FilmsItemPage } from './../Pages/FilmsItemPage/FilmsItemPage';
import { BestFilmsPage } from '../Pages/BestFilmsPage/BestFilmsPage';
import { SearchPage } from "../Pages/SearchPage/SearchPage";
import { routes } from './routes';


export const Router: React.FC = () => {
    return <Routes>
        <Route path={routes.root} element={<SearchPage />} />
        <Route path={routes.bestFilms} element={<BestFilmsPage />} />
        <Route path={routes.filmsItem} element={<FilmsItemPage />} />
        <Route path='*' element={<h1>404</h1>} />
    </Routes>;
};
