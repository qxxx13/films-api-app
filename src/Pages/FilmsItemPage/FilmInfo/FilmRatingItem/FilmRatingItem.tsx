import React from 'react';
import { Stack, Typography } from '@mui/material';

type FilmRatingItemProps = {
    value: number;
    count: number;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const FilmRatingItem: React.FC<FilmRatingItemProps> = ({ value, count, Icon }) => {

    const Temp = Icon as React.FC<React.SVGProps<SVGSVGElement>>;
    return (
        <Stack flexDirection='row' alignItems='center' sx={{ mr: 2 }}>
            <Temp />
            <Stack sx={{ ml: '4px' }}>
                <Typography variant='body2'>{value}</Typography>
                <Typography variant='body2' color='secondary'>{count}</Typography>
            </Stack>
        </Stack>
    );
};
