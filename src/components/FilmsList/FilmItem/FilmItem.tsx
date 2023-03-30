import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';

import { BestFilmsItemModel } from '../../../models/BestFilmsItemModel';

export type FilmItemProps = {
    film: BestFilmsItemModel;
};



export const FilmItem: React.FC<FilmItemProps> = (props) => {
    const navigate = useNavigate();
    return <Card sx={{ width: 250, marginTop: 4 }} key={props.film.filmId} onClick={() => navigate(`/films/${props.film.filmId}`)}>
        <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
                component='img'
                sx={{ height: 350 }}
                image={props.film.posterUrl}
                alt='filmsImage'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.film.nameRu || props.film.nameEn}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.film.year}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>;
};
