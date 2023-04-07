import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
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
    return <Card sx={{ width: 250 }} key={props.film.id} onClick={() => navigate(`/films/${props.film.id}`)}>
        <CardActionArea sx={{ height: '100%' }}>
            {!!props.film.posterUrl ?
                <CardMedia
                    component='img'
                    sx={{ height: 350 }}
                    image={props.film.posterUrl}
                    alt='filmsImage'
                />
                :
                <Skeleton variant="rectangular" width={'100%'} height={350} sx={{ mt: 2 }} />
            }
            <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant='h6' component='div'>
                    {props.film.nameRu || props.film.nameEn}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.film.year}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>;
};
