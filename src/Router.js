import React, { Suspense, lazy } from 'react';
import {Route, Switch} from 'react-router-dom';
const HomeComponent = lazy(() => import('./components/HomeComponent'));

const Router = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" component={HomeComponent} />
                </Switch>
            </Suspense>
        </main>        
    )
}

export default Router