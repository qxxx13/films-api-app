import React, { useMemo } from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

import { FilmItemInfo } from './FilmItemInfo/FilmItemInfo';
import { FilmRatingItem } from './FilmRatingItem/FilmRatingItem';
import { ReactComponent as CriticsIcon } from '../../../common/Icons/CriticsIcon.svg';
import { ReactComponent as ImdbIcon } from '../../../common/Icons/ImdbIcon.svg';
import { ReactComponent as KinoposkIcon } from '../../../common/Icons/KinopoiskIcon.svg';
import { KeysForFilmInfo } from '../../../common/KeysToShow/KeysToShow';
import { FilmsItemModel } from '../../../models/FilmsItemModel';

type FilmInfoProps = {
    film: FilmsItemModel;
};

export const FilmInfo: React.FC<FilmInfoProps> = ({ film }) => {
    const isDesktop = useMediaQuery('(min-width:900px)');

    const filmInfo = useMemo(() => {
        return Object.entries(film).map((entry) => {
            const [key, value] = entry;
            if (KeysForFilmInfo.has(key) && value !== null) {
                return <FilmItemInfo key={key} value={value as number} keyName={key} />;
            }
        });
    }, [film]);

    return (
        <Stack>
            <Typography variant={isDesktop ? 'h3' : 'h4'} gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
            {film.description &&
                <>
                    <div style={{ width: '100%', border: '2px solid', margin: '8px 0 8px 0' }} />
                    <Box sx={{ display: 'flex', maxHeight: 250, overflow: 'auto' }}>
                        <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                    </Box>
                    <div style={{ width: '100%', border: '2px solid', margin: '8px 0 8px 0' }} />
                </>
            }
            <Stack flexDirection='row'>
                <FilmRatingItem value={film.ratingKinopoisk} count={film.ratingKinopoiskVoteCount} Icon={KinoposkIcon} />
                <FilmRatingItem value={film.ratingImdb} count={film.ratingImdbVoteCount} Icon={ImdbIcon} />
                <FilmRatingItem value={film.ratingFilmCritics} count={film.ratingFilmCriticsVoteCount} Icon={CriticsIcon} />
            </Stack>
            {filmInfo}
        </Stack>
    );
};
