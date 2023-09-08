import React from 'react';
import styles from './AdminSideBar.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';

const AdminSideBar = () => {

    return <>
        <div className={`${styles.sidebarBox}`}>
            <div
                className={`d-flex flex-column align-items-center align-items-sm-start text-white ${styles.menu}`}>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu">
                    <li className={styles.navItem}>
                        <p className=" align-middle px-0">
                            <i className="fs-4 bi-house"></i>
                            <Link className={`ms-1 d-none d-sm-inline ${styles.link}`} activeClassName={styles.activeLink} to={ROUTES.coaches} > Тренери </Link>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" align-middle px-0">
                            <i className="fs-4 bi-house"></i>
                            <Link className={`ms-1 d-none d-sm-inline ${styles.link}`} activeClassName={styles.activeLink} to={ROUTES.coaching} > Тренування </Link>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-table"></i>
                            <Link className={`ms-1 d-none d-sm-inline ${styles.link}`} activeClassName={styles.activeLink} to={ROUTES.feedbacks} > Відгуки </Link>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-people"></i>
                            <Link className={`ms-1 d-none d-sm-inline ${styles.link}`} activeClassName={styles.activeLink} to={ROUTES.food} > Харчування </Link>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-people"></i>
                            <Link className={`ms-1 d-none d-sm-inline ${styles.link}`} activeClassName={styles.activeLink} to={ROUTES.faq} > FAQ </Link>
                        </p>
                    </li>

                    <li className={styles.navItem}>
                        <p className=" px-0 align-middle">
                            <i className="fs-4 bi-people"></i>
                            <Link className={`ms-1 d-none d-sm-inline ${styles.link}`} activeClassName={styles.activeLink} to={ROUTES.users} > Користувачі </Link>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default AdminSideBar;
