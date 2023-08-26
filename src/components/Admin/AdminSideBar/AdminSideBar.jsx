import React from 'react';
import styles from './AdminSideBar.module.css';

const AdminSideBar = () => {

    return <>
        <div className={`container-fluid`}>
            <div className={`row flex-nowrap `}>
                <div className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0  ${styles.sidebarBox}`}>
                    <div
                        className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span
                                    className="ms-1 d-none d-sm-inline">Тренери</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span
                                    className="ms-1 d-none d-sm-inline">Тренування</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span
                                    className="ms-1 d-none d-sm-inline">Відгуки</span></a>
                            </li>

                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span
                                    className="ms-1 d-none d-sm-inline">Харчування</span> </a>
                            </li>

                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span
                                    className="ms-1 d-none d-sm-inline">FAQ</span> </a>
                            </li>

                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span
                                    className="ms-1 d-none d-sm-inline">Користувачі</span> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AdminSideBar;
