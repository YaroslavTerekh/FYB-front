import styles from './FoodPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    deleteCoachingDetailsHelper,
    deleteCoachingHelper, deleteFoodHelper, deleteFoodPointHelper,
    getCoachesHelper,
    getCoachingHelper, getFoodHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import Button from '../../../../components/Button/Button';
import arrowIcon from '../../../../img/components/ri_arrow-up-line.png';
import AnimateHeight from 'react-animate-height';
import FoodPageModal from './modals/FoodPageModal';
import FoodPointModal from './modals/FoodPointModal';
import PreventDeleteModal from '../../../../components/PreventDeleteModal/PreventDeleteModal';
const FoodPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachingList, setCoachingList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const [addFoodIsOpen, setAddFoodIsOpen] = useState(false);
    const [editMode, setIsEditMode] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedToggleItem, setSelectedToggleItem] = useState(null);


    const [addFoodPointIsOpen, setAddFoodPointIsOpen] = useState(false);
    const [editFoodPointMode, setIsEditFoodPointMode] = useState(false);
    const [selectedFoodPointItem, setSelectedFoodPointItem] = useState(null);

    const handleToggle = (index) => {
        setSelectedToggleItem((prevSelectedItem) =>
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
        setSelectedFoodPointItem(null);
        setAddFoodPointIsOpen(false);
        setIsEditFoodPointMode(false);
    }

    function onDeleteFoodHandler(id: string) {
        setSelectedItem(id);
        setDeleteFoodIsOpen(true);
    }

    function onDeleteFoodPointHandler(id: string) {
        setSelectedFoodPointItem(id);
        setDeleteFoodPointIsOpen(true);
    }

    function addFoodCloseHandler() {
        setSelectedItem(null);
        setIsEditMode(false);
        setAddFoodIsOpen(false);
    }

    function onEditFoodPointHandler(id: string, foodId: string) {
        setSelectedItem(foodId);
        setSelectedFoodPointItem(id);
        setIsEditFoodPointMode(true);
        setAddFoodPointIsOpen(true);
    }

    const [deleteFoodIsOpen, setDeleteFoodIsOpen] = useState(false);

    function deleteFood() {
        deleteFoodHelper(selectedItem);
        setSelectedItem(null);
        setDeleteFoodIsOpen(false)
    }

    const [deleteFoodPointIsOpen, setDeleteFoodPointIsOpen] = useState(false);

    function deleteFoodPoint() {
        deleteFoodPointHelper(dispatch, selectedFoodPointItem);
        setSelectedFoodPointItem(null);
        setDeleteFoodPointIsOpen(false)
    }

    return (
        <>
            <PreventDeleteModal
                onClose={() => setDeleteFoodPointIsOpen(false)}
                isOpen={deleteFoodPointIsOpen}
                text={"Ви точно бажаєте видалити пункт харчування?"}
                onSummit={deleteFoodPoint}/>
            <PreventDeleteModal
                onClose={() => setDeleteFoodIsOpen(false)}
                isOpen={deleteFoodIsOpen}
                text={"Ви точно бажаєте видалити харчування?"}
                onSummit={deleteFood}/>
            <FoodPageModal
                onClose={addFoodCloseHandler}
                isOpen={addFoodIsOpen}
                editMode={editMode}
                selectedId={selectedItem} />
            <FoodPointModal
                selectedId={selectedFoodPointItem}
                foodId={selectedItem}
                editMode={editFoodPointMode}
                isOpen={addFoodPointIsOpen}
                onClose={onAddFoodPointCloseHandler} />

            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Харчування</h1>
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
                                            aria-expanded={selectedToggleItem === f.id}
                                            aria-controls={`example-panel-${f.id}`}
                                            onClick={() => handleToggle(f.id)}
                                        >
                                            <img
                                                className={
                                                    selectedToggleItem === f.id ? mainStyles.active : ''
                                                }
                                                src={arrowIcon}
                                                alt={`Toggle ${f.id}`}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <AnimateHeight
                                id={`example-panel-${f.id}`}
                                duration={500}
                                height={selectedToggleItem === f.id ? 'auto' : 0}
                                className=''
                            >
                                { f.foodPoints && f.foodPoints.map(d =>
                                    <div className=''>
                                        <div className={mainStyles.bodyBlock} key={d.id}>
                                            <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                <p>{d.title}</p>
                                            </div>
                                            <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                <div className={mainStyles.tableActions}>
                                                    <button className={mainStyles.tableBtn} onClick={() => onEditFoodPointHandler(d.id, f.id)}>
                                                        <img src={editIcon} alt='' />
                                                    </button>
                                                    <button className={mainStyles.tableBtn}  onClick={() => onDeleteFoodPointHandler(d.id)}>
                                                        <img src={deleteIcon} alt='' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </AnimateHeight>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FoodPage;
