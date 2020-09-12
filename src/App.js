import React from 'react';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createMemoryHistory } from 'history';
import Router from './Router';
import store from './store';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const history = createMemoryHistory();

function App() {
    return (
        <Provider store={store}>  
            <div className="App">
                <StaticRouter history={history}>
                    <HeaderComponent/>                
                    <Router/>
                    <FooterComponent/>
                </StaticRouter>
            </div>
        </Provider>
    );
}

export default App;
