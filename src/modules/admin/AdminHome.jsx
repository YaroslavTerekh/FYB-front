import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import AdminSideBar from '../../components/Admin/AdminSideBar/AdminSideBar';
import styles from './Admin.module.css'

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

    return (
        <Admin />
    )
};
