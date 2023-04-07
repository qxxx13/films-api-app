import React from 'react';
import { Stack, Typography } from '@mui/material';

type FilmsItemInfoProps = {
    keyName: string;
    value: number;
};

export const FilmsItemInfo: React.FC<FilmsItemInfoProps> = ({ keyName, value }) => {
    console.log(keyName, value);
    return (
        <Stack flexDirection='row' sx={{ mt: 1 }}>
            <Typography variant='body2'>{keyName}</Typography>
            <Typography variant='body2' sx={{ padding: '0 4px 0 1px' }}>:</Typography>
            <Typography variant='body2'> {value}</Typography>
        </Stack>
    );
};

