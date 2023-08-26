import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfilePage from './modules/user/pages/ProfilePage/ProfilePage';
import HomePage from './modules/user/pages/HomePage/HomePage';
import DetailsPage from './modules/user/pages/DetailsPage/DetailsPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { HEADER_NAVIGATION, ROUTES } from './constants';
import AdminHome from './modules/admin/AdminHome';

const App = () => (
    <div className=''>
        {/*<Router>*/}
        {/*    <Header navigationData={HEADER_NAVIGATION} />*/}
        {/*    <Routes>*/}
        {/*        <Route exact path={ROUTES.home} element={<HomePage />} />*/}
        {/*        <Route path={ROUTES.profile} element={<ProfilePage />} />*/}
        {/*        <Route path={ROUTES.details} element={<DetailsPage />} />*/}
        {/*    </Routes>*/}
        {/*    <Footer />*/}
        {/*</Router>*/}
        <Router>
            <Routes>
            <Route path={ROUTES.admin} element={<AdminHome />}>
                {/*<Route path="/admin/dashboard" element={<Dashboard />} />*/}

                {/*<Route path="*" element={<NotFound />} />*/}
            </Route>
            </Routes>
        </Router>
    </div>
);

export default App;
