import React, { useEffect, useState } from 'react';
import styles from './SystemAlert.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../../context/alert-context/alert-actions';

const SystemAlert = () => {

    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        if(alert.length > currentList.length) {
            setCurrentList([...alert]);

            const timeoutId = setTimeout(() => {
               dispatch(removeAlert());
               const list = currentList;
               list.shift();
               setCurrentList(list);

                clearTimeout(timeoutId);
            }, 6000);
        }

    }, [alert]);


    return (
        <div className={`${styles.alertBox} vetrino`}>
            {currentList && currentList.map((x, i) =>
                <div key={i} className={`${styles.alert} ${!x.isSuccess ? styles.alertError : ''}`}>{x.message}</div>
            )}
        </div>
    );
};

export default SystemAlert;
