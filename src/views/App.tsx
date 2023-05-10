import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useLayoutEffect } from 'react';
import { HomePage } from './HomePage/HomePage';
import { COLOURS } from './utils';

export const App: React.FC = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = COLOURS.BACKGROUND;
    });

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
};
