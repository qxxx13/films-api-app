import React, { useCallback } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';

import { translate } from '../../common/translate/translate';

export const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('1');

    const onChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const goToSearchPage = useCallback(() => navigate(`films-api-app`), [navigate]);
    const goToBestFilmsPage = useCallback(() => navigate('bestfilms'), [navigate]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ backgroundImage: 'none', backgroundColor: '#071429' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Tabs value={value} onChange={onChange}>
                            <Tab value='1' label={translate('search')} onClick={goToSearchPage} />
                            <Tab value='3' label={translate('bestFilms')} onClick={goToBestFilmsPage} />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

