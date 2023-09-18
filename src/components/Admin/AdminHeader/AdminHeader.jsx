import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './AdminHeader.module.css'
import { useSelector } from 'react-redux';
import mainStyles from '../../../modules/admin/Admin.module.css';
import logOutIcon from '../../../img/components/logout.png';
import { deleteAccessToken } from '../../../services/local-storage-service';

const AdminHeader = () => {
    const currentAdminState = useSelector(state => state.user);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if(currentAdminState?.firstName) {
            setSelectedUser(currentAdminState);
        }
    }, [currentAdminState]);

    return <>
            <div className={`${styles.headerBox} ${styles.h75}`}>
                <nav className={`navbar navbar-dark bg-dark position-fixed w-100 d-flex justify-content-between ${styles.h75}`}>
                    <a className={`navbar-brand ${styles.text}`}>Feel Your Body</a>
                    <div className={styles.mainBtns}>
                        <div className={styles.name}>
                            <p>{selectedUser?.firstName}</p>
                        </div>
                        <div className='logOut'>
                            <button className={styles.tableBtn}  >
                                <div className={styles.box} onClick={deleteAccessToken}>
                                    <p>Log out</p>
                                    <img src={logOutIcon} alt='' />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
}

export default AdminHeader;
