import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FilmsItemModel } from '../../../models/FilmsItemModel';

export type FilmItemProps = {
    film: FilmsItemModel;
};



export const FilmPageItem: React.FC<FilmItemProps> = (props) => {
    const navigate = useNavigate();
    return <Card sx={{ width: 250, marginTop: 4 }} key={props.film.kinopoiskId} onClick={() => navigate(`/films/${props.film.kinopoiskId}`)}>
        <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
                component='img'
                sx={{ height: 350 }}
                image={props.film.posterUrl}
                alt='filmsImage'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {props.film.nameRu || props.film.nameEn || props.film.nameOriginal}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.film.year}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>;
};
