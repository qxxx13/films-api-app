import React from 'react';
import { Stack, Typography } from '@mui/material';

import { translate } from '../../../../common/translate/translate';
import { useNormalizedTime } from '../../../../hooks/useNormalizedTime';

type FilmItemInfoProps = {
    keyName: string;
    value: number | string;
};


export const FilmTextInfo: React.FC<FilmItemInfoProps> = ({ keyName, value }) => {

    const test = keyName !== 'filmLength' ? value : useNormalizedTime(value as number).normalizedTime;

    return (
        <>
            {value !== null &&
                <Stack flexDirection='row' sx={{ mt: 1 }} alignItems='center'>
                    <Typography variant='body2'>{translate(keyName) + ':'}</Typography>
                    <Typography variant='body2' sx={{ ml: '3px' }}> {translate(test as string)}</Typography>
                </Stack>
            }
        </>
    );
};
