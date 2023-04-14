import React, { useMemo } from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import Link from '@mui/material/Link';

import { FilmBooleanInfo } from './FilmBooleanInfo/FilmBooleanInfo';
import { FilmRating } from './FilmRating/FilmRating';
import { FilmTextInfo } from './FilmTextInfo/FilmTextInfo';
import { KeysForFilmInfo } from '../../../common/FieldsForDisplay/FieldsForDisplay';
import { translate } from '../../../common/translate/translate';
import { FilmsItemModel } from '../../../models/FilmsItemModel';

type FilmInfoProps = {
    film: FilmsItemModel;
};

export const FilmInfo: React.FC<FilmInfoProps> = ({ film }) => {
    const isDesktop = useMediaQuery('(min-width:900px)');

    const filmInfo = useMemo(() => {
        return Object.entries(film).map((entry) => {
            const [key, value] = entry;
            if (KeysForFilmInfo.has(key)) {
                return typeof value !== 'boolean'
                    ?
                    <FilmTextInfo key={key} value={value as string} keyName={key} />
                    :
                    <FilmBooleanInfo key={key} value={value as boolean} keyName={key} />;
            }
        });
    }, [film]);

    return (
        <Stack>
            <Typography variant={isDesktop ? 'h3' : 'h4'} gutterBottom>{film?.nameRu || film?.nameEn || film?.nameOriginal}</Typography>
            <Link href={film.webUrl} sx={{ textDecoration: 'none', width: '170px' }}>{translate('watchOnKinopoisk')}</Link>
            {film.description &&
                <Box sx={{ display: 'flex', maxHeight: 250, overflow: 'auto', borderTop: '2px solid', borderBottom: '2px solid', mt: 2 }}>
                    <Typography variant='body1' gutterBottom>{film?.description}</Typography>
                </Box>
            }
            <Stack flexDirection={isDesktop ? 'row' : 'column'} justifyContent='space-between'>
                <Stack>
                    {filmInfo}
                </Stack>
                <Stack flexDirection='row' sx={{ bgcolor: '#18688f', padding: 2, borderRadius: 3, height: '30%', mt: 1 }}>
                    <FilmRating film={film} />
                </Stack>
            </Stack>

        </Stack>
    );
};
