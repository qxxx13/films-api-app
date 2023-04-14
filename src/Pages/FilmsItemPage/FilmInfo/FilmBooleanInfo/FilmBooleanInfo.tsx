import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';

import { translate } from '../../../../common/translate/translate';

type FilmItemInfoProps = {
    keyName: string;
    value: boolean;
};


export const FilmBooleanInfo: React.FC<FilmItemInfoProps> = ({ keyName, value }) => {

    const icon = value ? <CheckIcon fontSize='small' /> : <CloseIcon fontSize='small' />;

    return (
        <>
            <Stack flexDirection='row' sx={{ mt: 1 }} alignItems='center'>
                <Typography variant='body2' sx={{ mr: 1 }}>{translate(keyName) + ':'}</Typography>
                {icon}
            </Stack>
        </>
    );
};
