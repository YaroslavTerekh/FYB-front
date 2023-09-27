import styles from './CoachesPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import CoachModal from './modals/CoachModal';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import UpdateCoachModal from './modals/UpdateCoachModal';
import {
    deleteCoachDetailsHelper,
    deleteCoachHelper,
    getCoachesHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import PreventDeleteModal from '../../../../components/PreventDeleteModal/PreventDeleteModal';
import CoachDetails from './modals/CoachDetails';
import AnimateHeight from 'react-animate-height';
import Button from '../../../../components/Button/Button';
import arrowIcon from '../../../../img/components/ri_arrow-up-line.png';
import UploadImages from './modals/UploadImages';
const CoachesPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachesList, setCoachesList] = useState([]);

    const [addCoachIsOpen, setAddCoachIsOpen] = useState(false);
    const [editCoachIsOpen, setEditCoachIsOpen] = useState(false);
    const [selectedCoachId, setSelectedCoachId] = useState(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    const [addDetailsIsOpen, setAddDetailsIsOpen] = useState(false);


    const [selectedItem, setSelectedItem] = useState(null);

    const handleToggle = (index) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === index ? null : index
        );
    };

    useEffect(() => {
        getCoachesHelper(dispatch);
    }, []);

    useEffect(() => {
        setCoachesList(currentAdminState.coaches);
    }, [currentAdminState.coaches]);

    function onEditCoachHandler(id: string) {
        setSelectedCoachId(id);
        setEditCoachIsOpen(true);
    }

    function onEditCloseCoachHandler() {
        setSelectedCoachId(null);
        setEditCoachIsOpen(false);
    }

    function addCoachCloseHandler() {
        setAddCoachIsOpen(false);
    }

    function onDeleteCoachHandler(id) {
        setSelectedCoachId(id);
        setDeleteIsOpen(true);
    }

    function deleteCoach() {
        setDeleteIsOpen(false);
        deleteCoachHelper(dispatch, selectedCoachId);
    }

    function onAddDetailsHandler(id: string) {
        setSelectedCoachId(id);
        setAddDetailsIsOpen(true);
    }

    function deleteCoachDetails(id: string) {
        deleteCoachDetailsHelper(dispatch, id);
    }

    const [imagesIsOpenOpen, setImagesIsOpen] = useState(false);

    function onImagesOpenHandler(id: string) {
        setImagesIsOpen(true);
        setSelectedCoachId(id);
    }

    function onImagesCloseHandler(id: string) {
        setImagesIsOpen(false);
        setSelectedCoachId(null);
    }

    return (
        <>
            <UploadImages isOpen={imagesIsOpenOpen} onClose={onImagesCloseHandler} coachingId={selectedCoachId}/>
            <CoachDetails onClose={() => setAddDetailsIsOpen(false)} isOpen={addDetailsIsOpen} coachId={selectedCoachId}/>
            <PreventDeleteModal onClose={() => setDeleteIsOpen(false)} isOpen={deleteIsOpen} text={"Ви точно бажаєте видалити тренера?"} onSummit={deleteCoach}/>
            <UpdateCoachModal  isOpen={editCoachIsOpen} selectedCoachId={selectedCoachId} onClose={onEditCloseCoachHandler} />
            <CoachModal isOpen={addCoachIsOpen} onClose={addCoachCloseHandler} />
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Тренер</h1>
                </div>
                <div className=''>
                    <button className={mainStyles.mainAddBtn} onClick={() => setAddCoachIsOpen(true)}>
                        <p className={mainStyles.mainAddBtnText}>Додати тренера</p>
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

                    {coachesList && coachesList.map(c =>
                        <div>
                            <div className={mainStyles.bodyBlock} key={c.id}>
                                <div className={mainStyles.blockItem}>
                                    <p>{c.firstName}</p>
                                </div>
                                <div className={mainStyles.blockItem}>
                                    <div className={mainStyles.tableActions}>
                                        <button className={mainStyles.tableBtn} onClick={() => onEditCoachHandler(c.id
                                        )}>
                                            <img src={editIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onAddDetailsHandler(c.id)}>
                                            <div className={mainStyles.box}>
                                                <img src={addIcon} alt='' />
                                                <p>Деталі</p>
                                            </div>
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onImagesOpenHandler(c.id)}>
                                            <div className={mainStyles.box}>
                                                <img src={addIcon} alt='' />
                                                <p>Фото</p>
                                            </div>
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onDeleteCoachHandler(c.id
                                        )}>
                                            <img src={deleteIcon} alt='' />
                                        </button>
                                    </div>
                                    <div className='toggle'>
                                        <Button
                                            className={mainStyles.toggleArrow}
                                            aria-expanded={selectedItem === c.id}
                                            aria-controls={`example-panel-${c.id}`}
                                            onClick={() => handleToggle(c.id)}
                                        >
                                            <img
                                                className={
                                                    selectedItem === c.id ? mainStyles.active : ''
                                                }
                                                src={arrowIcon}
                                                alt={`Toggle ${c.id}`}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <AnimateHeight
                                id={`example-panel-${c.id}`}
                                duration={500}
                                height={selectedItem === c.id ? 'auto' : 0}
                                className=''
                            >
                                { c.details && c.details.map(d =>
                                    <div className=''>
                                        <div className={mainStyles.bodyBlock} key={d.id}>
                                            <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                <p>{d.detail}</p>
                                            </div>
                                            <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                <div className={mainStyles.tableActions}>
                                                    <button className={mainStyles.tableBtn}  onClick={() => deleteCoachDetails(d.id)}>
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

export default CoachesPage;
