import React from 'react';
import { Stack, SvgIconTypeMap, Tooltip, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { translate } from '../../../../../common/translate/translate';

type FilmRatingItemProps = {
    value: number;
    count: number;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    tooltipTitle: string;
};

export const FilmRatingItem: React.FC<FilmRatingItemProps> = ({ value, count, Icon, tooltipTitle }) => {
    const WebsiteIcon = Icon as OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };

    return (

        <Stack flexDirection='row' alignItems='center'>
            <Tooltip title={<Typography variant='body2'>{translate(tooltipTitle)}</Typography>} arrow>
                <WebsiteIcon fontSize='large' />
            </Tooltip>
            <Stack sx={{ ml: '8px' }}>
                <Tooltip title={<Typography variant='body2'>{translate('avgRating')}</Typography>} arrow>
                    <Typography variant='body2' sx={{ userSelect: 'none' }}>{value}</Typography>
                </Tooltip>
                <Tooltip title={<Typography variant='body2'>{translate('countRating')}</Typography>} arrow>
                    <Typography variant='body2' color='secondary' sx={{ userSelect: 'none' }}>{count}</Typography>
                </Tooltip>
            </Stack>
        </Stack>
    );
};
