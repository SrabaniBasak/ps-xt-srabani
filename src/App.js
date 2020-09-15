import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import loadable from '@loadable/component';
import { createMemoryHistory } from 'history';
import Router from './Router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const history = createMemoryHistory();
const HeaderComponent = loadable(() => import('./components/Header'));
const FooterComponent = loadable(() => import('./components/Footer'));

function App() {
    return (
        <Provider store={store}>  
            <div className="App">
                <StaticRouter history={history}>
                    <HeaderComponent data-test="header"/>                
                    <Router data-test="mainContent"/>
                    <FooterComponent data-test="footer"/>
                </StaticRouter>
            </div>
        </Provider>
    );
}

export default App;
