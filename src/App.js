import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Router from './Router';
import store from './store';
import HeaderComponent from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Provider store={store}>  
            <div className="App">
                <BrowserRouter>
                    <HeaderComponent/>                
                    <Router/>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
