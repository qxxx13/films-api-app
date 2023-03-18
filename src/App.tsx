import React from 'react';
import { ParticlesBackground } from './common/ParticlesBackground/ParticlesBackground';
import { NavBar } from './components/NavBar/NavBar';
import { Router } from './router/Router';

export const App = () => {
    return (
        <div className='App'>
            <ParticlesBackground />
            <NavBar />
            <Router />
        </div>
    );
};
