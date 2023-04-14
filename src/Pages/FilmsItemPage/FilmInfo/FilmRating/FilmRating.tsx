import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import VerifiedIcon from '@mui/icons-material/Verified';
import VideocamIcon from '@mui/icons-material/Videocam';

import { FilmRatingItem } from './FilmRatingItem/FilmRatingItem';
import { FilmsItemModel } from '../../../../models/FilmsItemModel';

type FilmRatingProps = {
    film: FilmsItemModel;
};

export const FilmRating: React.FC<FilmRatingProps> = ({ film }) => {
    return (
        <>
            {film.ratingKinopoisk &&
                <FilmRatingItem value={film.ratingKinopoisk} count={film.ratingKinopoiskVoteCount} Icon={VideocamIcon} tooltipTitle='Kinopoisk' />
            }
            {film.ratingImdb &&
                <FilmRatingItem value={film.ratingImdb} count={film.ratingImdbVoteCount} Icon={MovieIcon} tooltipTitle='Imdb' />
            }
            {film.ratingFilmCritics &&
                <FilmRatingItem value={film.ratingFilmCritics} count={film.ratingFilmCriticsVoteCount} Icon={VerifiedIcon} tooltipTitle='Critics' />
            }
        </>
    );
};
