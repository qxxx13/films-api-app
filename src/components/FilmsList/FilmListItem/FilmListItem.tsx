import React from 'react';
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

    return <Card sx={{ width: isDesktop ? 250 : 135 }} key={props.film.id} onClick={() => navigate(`/films/${props.film.id}`)} elevation={5}>
        <CardActionArea sx={{ height: '100%' }}>
            {!!props.film.posterUrl ?
                <CardMedia
                    component='img'
                    sx={{ height: isDesktop ? 350 : 200 }}
                    image={props.film.posterUrl}
                    alt='filmsImage'
                />
                :
                <Skeleton variant="rectangular" width={'100%'} height={350} sx={{ mt: 2 }} />
            }
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