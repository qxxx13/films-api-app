import React from 'react';
import { Stack, SvgIconTypeMap, Tooltip, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type FilmRatingItemProps = {
    value: number;
    count: number;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    tooltipTitle: string;
};

export const FilmRatingItem: React.FC<FilmRatingItemProps> = ({ value, count, Icon, tooltipTitle }) => {
    const WebsiteIcon = Icon as OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };

    return (
        <Tooltip title={tooltipTitle} arrow>
            <Stack flexDirection='row' alignItems='center' sx={{ mr: 2 }}>
                <WebsiteIcon fontSize='large' />
                <Stack sx={{ ml: '8px' }}>
                    <Typography variant='body2' sx={{ userSelect: 'none' }}>{value}</Typography>
                    <Typography variant='body2' color='secondary' sx={{ userSelect: 'none' }}>{count}</Typography>
                </Stack>
            </Stack>
        </Tooltip>
    );
};
