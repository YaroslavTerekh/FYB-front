import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../../components/Admin/AdminHeader/AdminHeader';
import AdminSideBar from '../../components/Admin/AdminSideBar/AdminSideBar';
import styles from './Admin.module.css'

const Admin = () => {

    return (
        <>
            <AdminHeader />
            <div className={styles.box}>
                <AdminSideBar />
                <Outlet />
            </div>
        </>
    );
};

export default function AdminHome() {

    return (
        <Admin />
    )
};
