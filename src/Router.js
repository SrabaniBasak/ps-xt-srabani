import React from 'react';
import {Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
const HomeComponent = loadable(() => import('./components/HomeComponent'));

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={HomeComponent} />
        </Switch>
    )
}

export default Router