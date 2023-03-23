import { Routes, Route } from "react-router-dom";
import { FilmsPage } from "../pages/FilmsPage/FilmsPage";
import { routes } from './routes';
import { BestFilmsPage } from '../pages/BestFilmsPage/BestFilmsPage';


export const Router: React.FC = () => {
    return <Routes>
        <Route path={routes.root} element={<FilmsPage />} />
        <Route path={routes.bestFilms} element={<BestFilmsPage />} />
        <Route path='*' element={<h1>404</h1>} />
    </Routes>;
};
