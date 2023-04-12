import React, { useMemo } from 'react';
import { Stack } from '@mui/material';

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

    const filmInfo = useMemo(() => {
        return Object.entries(film).map((entry) => {
            const [key, value] = entry;
            if (KeysForFilmInfo.has(key)) {
                return <FilmItemInfo key={key} value={value as number} keyName={key} />;
            }
        });
    }, [film]);

    return (
        <Stack sx={{ width: '50%' }}>
            <Stack flexDirection='row'>
                <FilmRatingItem value={film.ratingKinopoisk} count={film.ratingKinopoiskVoteCount} Icon={KinoposkIcon} />
                <FilmRatingItem value={film.ratingImdb} count={film.ratingImdbVoteCount} Icon={ImdbIcon} />
                <FilmRatingItem value={film.ratingFilmCritics} count={film.ratingFilmCriticsVoteCount} Icon={CriticsIcon} />
            </Stack>
            {filmInfo}
        </Stack>
    );
};
