import React from 'react';
import ReactDOM from 'react-dom';
import { SongsProvider } from './Context/SongsProvider';
import Home from './component/home';
import '../styles/index.css'

ReactDOM.render(
    <SongsProvider>
        <Home />
    </SongsProvider>,
    document.getElementById('app')
);
