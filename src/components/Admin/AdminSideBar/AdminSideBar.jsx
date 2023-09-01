import React from 'react';
import styles from './AdminSideBar.module.css';

const AdminSideBar = () => {

    return <>
        <div className={`${styles.sidebarBox}`}>
            <div
                className={`d-flex flex-column align-items-center align-items-sm-start text-white ${styles.menu}`}>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu">
                    <li className={styles.navItem}>
                        <p className=" align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span
                            className="ms-1 d-none d-sm-inline">Тренери</span>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span
                            className="ms-1 d-none d-sm-inline">Тренування</span>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span
                            className="ms-1 d-none d-sm-inline">Відгуки</span></p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span
                            className="ms-1 d-none d-sm-inline">Харчування</span> </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span
                            className="ms-1 d-none d-sm-inline">FAQ</span> </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span
                            className="ms-1 d-none d-sm-inline">Користувачі</span> </p>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default AdminSideBar;
