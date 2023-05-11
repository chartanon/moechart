import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HomePage } from './HomePage/HomePage';
import { COLOURS } from './utils';
import { Helmet } from 'react-helmet';

export const App: React.FC = () => {
    useLayoutEffect(() => {
        document.body.style.backgroundColor = COLOURS.BACKGROUND;
    });

    const [iconFileName, setIconFileName] = useState<string>();
    useEffect(() => {
        const IconFileNames = ['Meguru.ico', 'Ayase.ico'];
        setIconFileName(
            IconFileNames[Math.floor(Math.random() * IconFileNames.length)]
        );
    }, []);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact>
                    <>
                        <Helmet>
                            <link
                                rel="icon"
                                type="image/png"
                                href={iconFileName}
                                sizes="16x16"
                            />
                        </Helmet>
                        <HomePage />
                    </>
                </Route>
            </Switch>
        </Router>
    );
};
