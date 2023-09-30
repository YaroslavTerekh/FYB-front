import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import AdminSideBar from '../../components/Admin/AdminSideBar/AdminSideBar';
import styles from './Admin.module.css'
import { ROUTES } from '../../constants';
import { AdminRole } from '../../constants/roles';

const Admin = () => {

    return (
        <div className={styles.adminPage}>
            <AdminHeader />
            <div className={styles.box}>
                <div className={styles.sidebar}>
                    <AdminSideBar />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default function AdminHome() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === ROUTES.admin + "/" || location.pathname === ROUTES.admin) {
            navigate(ROUTES.coaches);
        }
    }, [location.pathname, navigate]);

    return (
        <Admin />
    )
};
