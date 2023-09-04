import styles from './FoodPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    getCoachingHelper, getFoodHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import Button from '../../../../components/Button/Button';
import arrowIcon from '../../../../img/components/ri_arrow-up-line.png';
import AnimateHeight from 'react-animate-height';

const UsersPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachingList, setCoachingList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const [addFoodIsOpen, setAddFoodIsOpen] = useState(false);
    const [editMode, setIsEditMode] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const [addFoodPointIsOpen, setAddFoodPointIsOpen] = useState(false);
    const [editFoodPointMode, setIsEditFoodPointMode] = useState(false);
    const [selectedFoodPointItem, setSelectedFoodPointItem] = useState(null);

    const handleToggle = (index) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === index ? null : index
        );
    };

    useEffect(() => {
        getCoachingHelper(dispatch);
        getFoodHelper(dispatch);
    }, []);

    useEffect(() => {
        setCoachingList(currentAdminState.coaching);
    }, [currentAdminState.coaching]);

    useEffect(() => {
        if (currentAdminState.food) {
            setFoodList(currentAdminState.food);
        }
    }, [currentAdminState.food]);

    function onEditHandler(id: string) {
        setSelectedItem(id);
        setIsEditMode(true);
        setAddFoodIsOpen(true);
    }

    function onAddFoodPointHandler(id: string) {
        setSelectedItem(id);
        setAddFoodPointIsOpen(true);
    }

    function onAddFoodPointCloseHandler() {
        setSelectedItem(null);
        setSelectedFoodPointItem(null)
        setAddFoodPointIsOpen(false);
    }

    function onDeleteFoodHandler(id: string) {
        // setSelectedCoachId(null);
        // setEditCoachIsOpen(false);
    }

    function onDeleteFoodPointHandler(id: string) {
        // setSelectedCoachId(null);
        // setEditCoachIsOpen(false);
    }

    function addFoodCloseHandler() {
        setSelectedItem(null);
        setIsEditMode(false);
        setAddFoodIsOpen(false);
    }



    return (
        <>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Тренер</h1>
                </div>
                <div className=''>
                    <button className={mainStyles.mainAddBtn} onClick={() => setAddFoodIsOpen(true)}>
                        <p className={mainStyles.mainAddBtnText}>Додати харчування</p>
                        <img src={addIcon} alt='' className={mainStyles.mainAddBtnIcon}/>
                    </button>
                </div>
                <div className={mainStyles.tableBox}>
                    <div className={mainStyles.headBlock}>
                        <div className={mainStyles.blockItem}>
                            <p>Name</p>
                        </div>
                        <div className={mainStyles.blockItem}>
                            <p>Actions</p>
                        </div>
                    </div>

                    {foodList && foodList.map(f =>
                        <div>
                            <div className={mainStyles.bodyBlock} key={f.id}>
                                <div className={mainStyles.blockItem}>
                                    <p>{f.title}</p>
                                </div>
                                <div className={mainStyles.blockItem}>
                                    <div className={mainStyles.tableActions}>
                                        <button className={mainStyles.tableBtn} onClick={() => onEditHandler(f.id)}>
                                            <img src={editIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onDeleteFoodHandler(f.id)}>
                                            <img src={deleteIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onAddFoodPointHandler(f.id)}>
                                            <div className={mainStyles.box}>
                                                <img src={addIcon} alt='' />
                                                <p>Додати пункт харчування</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='toggle'>
                                        <Button
                                            className={mainStyles.toggleArrow}
                                            aria-expanded={selectedItem === f.id}
                                            aria-controls={`example-panel-${f.id}`}
                                            onClick={() => handleToggle(f.id)}
                                        >
                                            <img
                                                className={
                                                    selectedItem === f.id ? mainStyles.active : ''
                                                }
                                                src={arrowIcon}
                                                alt={`Toggle ${f.id}`}
                                            />
                                        </Button>
                                    </div>
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
