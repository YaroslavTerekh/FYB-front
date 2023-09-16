import React, { lazy, Suspense, useEffect, useState } from 'react';
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
import FoodPage from './modules/admin/pages/foods/FoodPage';
import UsersPage from './modules/admin/pages/users/UsersPage';
import FAQPage from './modules/admin/pages/FAQ/FAQPage';
import { useSelector } from 'react-redux';
import { AdminRole } from './constants/roles';
import ConfirmPhoneNumberPage from './modules/auth/ConfirmPhoneNumber/ConfirmPhoneNumberPage';

function App() {
    const currentUserState = useSelector(state => state.user);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if(currentUserState?.firstName) {
            debugger;
            setSelectedUser(currentUserState);
        }
    }, [currentUserState]);

    return (
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
                            <Route path={ROUTES.confirmNumber} element={<ConfirmPhoneNumberPage />} />
                        </Route>



                        {selectedUser?.role && selectedUser.role === AdminRole &&
                            <Route path={ROUTES.admin} element={<AdminHome />}>
                                <Route path={ROUTES.coaches} element={<CoachesPage />} />
                                <Route path={ROUTES.feedbacks} element={<FeedbackPage />} />
                                <Route path={ROUTES.coaching} element={<CoachingPage />} />
                                <Route path={ROUTES.food} element={<FoodPage />} />
                                <Route path={ROUTES.users} element={<UsersPage />} />
                                <Route path={ROUTES.faq} element={<FAQPage />} />

                                {/*<Route path="*" element={<NotFound />} />*/}
                            </Route>
                        }
                    </Routes>
                </Router>
            </AxiosInterceptor>
        </div>
    );
}

export default App;
