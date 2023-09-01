import { Outlet } from 'react-router-dom';
import React from 'react';
import styles from './AdminHeader.module.css'

const AdminHeader = () => {

    return <>
            <div className={`${styles.headerBox} ${styles.h75}`}>
                <nav className={`navbar navbar-dark bg-dark position-fixed w-100 ${styles.h75}`}>
                    <a className="navbar-brand">Feel Your Body</a>
                </nav>
            </div>
        </>
}

export default AdminHeader;
