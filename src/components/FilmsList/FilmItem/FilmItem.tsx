import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { ApiItemModel } from '../../../models/ApiItemModel';
import { useNavigate } from 'react-router-dom';

export type FilmItemProps = {
    film: ApiItemModel[];
};

export const FilmItem: React.FC<FilmItemProps> = (props) => {
    const navigate = useNavigate();

    return (
        <>
            {props.film.map(film =>
                <Card sx={{ width: 250, marginTop: 4 }} key={film.kinopoiskId} onClick={() => navigate(`${film.kinopoiskId}`)}>
                    <CardActionArea sx={{ height: '100%' }}>
                        <CardMedia
                            component='img'
                            sx={{ height: 350 }}
                            image={film.posterUrl}
                            alt='filmsImage'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {film.nameRu || film.nameEn || film.nameOriginal}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {film.year}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </>
    );
};
