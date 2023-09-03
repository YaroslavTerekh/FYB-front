import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProfilePage from './modules/user/pages/ProfilePage/ProfilePage';
import HomePage from './modules/user/pages/HomePage/HomePage';
import DetailsPage from './modules/user/pages/DetailsPage/DetailsPage';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { HEADER_NAVIGATION, ROUTES } from './constants';
import AdminHome from './modules/admin/AdminHome';
import UserMainPage from './modules/user/UserMainPage';
import CoachesPage from './modules/admin/pages/coaches/CoachesPage';
import { AxiosInterceptor } from './axios-settings';
import FeedbackPage from './modules/admin/pages/feedbacks/FeedbackPage';
import CoachingPage from './modules/admin/pages/coaching/CoachingPage';

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
        <AxiosInterceptor>
            <Router>
                <Routes>
                    <Route path={ROUTES.home} element={<UserMainPage />}>
                        <Route exact path={ROUTES.home} element={<HomePage />} />
                        <Route path={ROUTES.profile} element={<ProfilePage />} />
                        <Route path={ROUTES.details} element={<DetailsPage />} />
                    </Route>
                    <Route path={ROUTES.admin} element={<AdminHome />}>
                        <Route path={ROUTES.coaches} element={<CoachesPage />} />
                        <Route path={ROUTES.feedbacks} element={<FeedbackPage />} />
                        <Route path={ROUTES.coaching} element={<CoachingPage />} />
                        {/*<Route path="/coach-models/dashboard" element={<Dashboard />} />*/}

                        {/*<Route path="*" element={<NotFound />} />*/}
                    </Route>
                </Routes>
            </Router>
        </AxiosInterceptor>
    </div>
);

export default App;
