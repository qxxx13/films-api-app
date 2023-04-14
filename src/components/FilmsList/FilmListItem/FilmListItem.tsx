import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardActionArea, CardContent, CardMedia, Skeleton, Typography, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';

export type FilmItemProps = {
    film: {
        id: number,
        posterUrl: string,
        nameRu: string,
        nameEn: string,
        year: string;
    };
};

export const FilmListItem: React.FC<FilmItemProps> = (props) => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery('(min-width:900px)');

    const goToFilmItemPage = useCallback(() => navigate(`/films/${props.film.id}`), [navigate]);

    return <Card sx={{ width: isDesktop ? 250 : 135 }} key={props.film.id} onClick={goToFilmItemPage} elevation={5}>
        <CardActionArea sx={{ height: '100%' }}>
            <CardMedia
                component='img'
                sx={{ height: isDesktop ? 350 : 200 }}
                image={props.film.posterUrl}
                alt='filmsImage'
            />
            <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant='body1' component='div'>
                    {props.film.nameRu || props.film.nameEn}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.film.year}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>;
};
