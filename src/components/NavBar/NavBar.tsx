import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState('1');

    const onChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ bgcolor: 'transparent' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Tabs value={value} onChange={onChange}>
                            <Tab value='1' label='HOME' onClick={() => navigate(`/`)} />
                            <Tab value='2' label='FILMS' onClick={() => navigate(`films/page/1`)} />
                            <Tab value='3' label='BEST FILMS' onClick={() => navigate('bestfilms/page/1')} />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

