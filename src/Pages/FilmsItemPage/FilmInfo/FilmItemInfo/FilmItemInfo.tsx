import React from 'react';
import { Stack, Typography } from '@mui/material';

import { translate } from '../../../../common/translate/translate';
import { useNormalizedTime } from '../../../../hooks/useNormalizedTime';

type FilmItemInfoProps = {
    keyName: string;
    value: number;
};


export const FilmItemInfo: React.FC<FilmItemInfoProps> = ({ keyName, value }) => {
    return (
        <Stack flexDirection='row' sx={{ mt: 1 }}>
            <Typography variant='body2'>{translate(keyName) + ':'}</Typography>
            {keyName !== 'filmLength' ?
                <Typography variant='body2' sx={{ ml: '3px' }}> {value}</Typography>
                :
                <Typography variant='body2' sx={{ ml: '3px' }}> {useNormalizedTime(value).normalizedTime}</Typography>
            }
        </Stack>
    );
};
