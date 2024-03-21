// client/index.js
import React from 'react'
// import { render } from 'react-dom';
import { hydrate } from 'react-dom';
import Home from '../containers/Home';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import Header from '../components/Header';

const component = <BrowserRouter>
    <>
        <Header />
        <>
            {routes}
        </>
    </>
</BrowserRouter>
hydrate(component, window.root);