import styles from './FoodPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    deleteCoachingDetailsHelper,
    deleteCoachingHelper,
    getCoachesHelper,
    getCoachingHelper, getFoodHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import Button from '../../../../components/Button/Button';
import arrowIcon from '../../../../img/components/ri_arrow-up-line.png';
import AnimateHeight from 'react-animate-height';
import FoodPageModal from './modals/FoodPageModal';
import FoodPointModal from './modals/FoodPointModal';
const FoodPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachingList, setCoachingList] = useState([]);
    const [foodList, setFoodList] = useState([]);

    const [addFoodIsOpen, setAddFoodIsOpen] = useState(false);
    const [editMode, setIsEditMode] = useState(false);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    const [addDetailsIsOpen, setAddDetailsIsOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

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

    function onAddDetailsHandler(id: string) {
        // setSelectedCoachId(id);
        setAddDetailsIsOpen(true);
    }

    function onEditCloseCoachHandler() {
        // setSelectedCoachId(null);
        // setEditCoachIsOpen(false);
    }

    function addFoodCloseHandler() {
        setSelectedItem(null);
        setIsEditMode(false);
        setAddFoodIsOpen(false);
    }

    function onDeleteCoachHandler(id) {
        debugger
        // setSelectedCoachId(id);
        setDeleteIsOpen(true);
    }

    function deleteCoaching() {
        // setDeleteIsOpen(false);
        // deleteCoachingHelper(dispatch, selectedCoachId);
    }

    function deleteCoachingDetails(id: string) {
        deleteCoachingDetailsHelper(dispatch, id);
    }


    return (
        <>
            {/*<UpdateCoaching  isOpen={editCoachIsOpen} selectedCoachingId={selectedCoachId} onClose={onEditCloseCoachHandler} />*/}
            {/*<CoachingDetails onClose={() => setAddDetailsIsOpen(false)} isOpen={addDetailsIsOpen} coachingId={selectedCoachId}/>*/}
            {/*<PreventDeleteModal onClose={() => setDeleteIsOpen(false)} isOpen={deleteIsOpen} text={"Ви точно бажаєте видалити тренування?"} onSummit={deleteCoaching}/>*/}
            <FoodPageModal onClose={addFoodCloseHandler} isOpen={addFoodIsOpen} editMode={editMode} selectedId={selectedItem} />
            <FoodPointModal selectedId={selectedItem} foodId={  }  editMode={  }  isOpen={  }   onClose={  } />
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
                                        <button className={mainStyles.tableBtn}  onClick={() => onDeleteCoachHandler(f.id)}>
                                            <img src={deleteIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onAddDetailsHandler(f.id)}>
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
                            <AnimateHeight
                                id={`example-panel-${f.id}`}
                                duration={500}
                                height={selectedItem === f.id ? 'auto' : 0}
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
                                                    <button className={mainStyles.tableBtn}  onClick={() => deleteCoachingDetails(d.id)}>
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
