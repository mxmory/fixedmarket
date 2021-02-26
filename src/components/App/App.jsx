import { Router } from '@reach/router';
import React, { useEffect } from 'react';
import { Header } from '../Common/Header/index';
import { Home } from '../Home/index';
import { Detail } from '../Detail/index';
import { Category } from '../Category/index';

import { Categories } from '../Categories/index';
import { useDispatch } from 'react-redux';
import { Footer } from '../Common/Footer';
import { SubscribePanel } from '../Common/SubscribePanel';
import { Profile } from '../Profile/index';

const App = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getCategories());
    // }, []);

    return (
        <div className="container">
            <SubscribePanel />
            <Header />
            <Router>
                <Home path="/" />
                <Categories path="catalog" />
                <Category path="catalog/:category" />
                <Detail path="catalog/:category/:item" />
                <Profile path="profile" />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
