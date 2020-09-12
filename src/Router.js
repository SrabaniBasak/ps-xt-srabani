import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={HomeComponent} />
        </Switch>
    )
}

export default Router