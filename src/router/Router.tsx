import { Routes, Route } from "react-router-dom";
import { FilmsPage } from "../Pages/FilmsPage/FilmsPage";
import { routes } from './routes';
import { BestFilmsPage } from '../Pages/BestFilmsPage/BestFilmsPage';


export const Router: React.FC = () => {
    return <Routes>
        <Route path={routes.root} element={<></>} />
        <Route path={routes.films} element={<FilmsPage />} />
        <Route path={routes.bestFilms} element={<BestFilmsPage />} />
        <Route path='*' element={<h1>404</h1>} />
    </Routes>;
};
