import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState('one');

    const onChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ bgcolor: 'transparent' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Tabs value={value} onChange={onChange}>
                            <Tab value='one' label='FILMS' onClick={() => navigate('films')} />
                            <Tab value='two' label='THE BEST FILMS' onClick={() => navigate('bestfilms')} />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

