import * as React from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../store/hooks';
import { FilmItem } from './FilmItem/FilmItem';
import { getFilms, getIsLoading } from './../../store/filmsData/filmsDataReducer';
import Typography from '@mui/material/Typography';


export const FilmsList: React.FC = () => {
    const films = useAppSelector(getFilms);
    const isLoading = useAppSelector(getIsLoading);
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {!isLoading ?
                <FilmItem film={films} />
                :
                <Typography variant='h1'>loading...</Typography>
            }
        </Box>
    );
};
