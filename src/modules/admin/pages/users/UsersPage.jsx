import styles from './UsersPage.module.css';
import mainStyles from '../../Admin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    getCoachingHelper, getFoodHelper, getUsersHelper,
} from '../../../../context/admin-data-context/admin-context.helper';

const UsersPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [usersList, setUsersList] = useState([]);


    useEffect(() => {
        getUsersHelper(dispatch);
    }, []);

    useEffect(() => {
        if (currentAdminState.users) {
            setUsersList(currentAdminState.users);
        }
    }, [currentAdminState.users]);

    return (
        <>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Користувачі</h1>
                </div>
                <div className={mainStyles.tableBox}>
                    <div className={mainStyles.headBlock}>
                        <div className={mainStyles.blockItem}>
                            <p>Name</p>
                        </div>
                        <div className={mainStyles.blockItem}>
                            <p>Training</p>
                        </div>
                        <div className={mainStyles.blockItem}>
                            <p>Доступ до</p>
                        </div>
                    </div>

                    {usersList && usersList.map(f =>
                        <div>
                            <div className={mainStyles.bodyBlock} key={f.id}>
                                <div className={mainStyles.blockItem + " " + mainStyles.blockItemUsersTable}>
                                    <p>{f.firstName} {f.lastName}</p>
                                </div>
                                <div className={mainStyles.blockItem + " " + mainStyles.blockItemUsersTable}>
                                    { f?.coachingPurchases &&  f?.coachingPurchases?.map(x=>
                                        <>
                                            <p>{x?.product.title}</p>
                                            <p>{x?.product.title}</p>
                                        </>
                                    )}
                                </div>
                                <div className={mainStyles.blockItem + " " + mainStyles.blockItemUsersTable}>
                                    { f?.coachingPurchases &&  f?.coachingPurchases?.map(x=>
                                        <p>{new Date(x?.expireDate).toDateString()}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default UsersPage;
