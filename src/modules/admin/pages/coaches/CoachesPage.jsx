import styles from './CoachesPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import CoachModal from './modals/CoachModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import UpdateCoachModal from './modals/UpdateCoachModal';
import { deleteCoachHelper, getCoachesHelper } from '../../../../context/admin-data-context/admin-context.helper';
import PreventDeleteModal from '../../../../components/PreventDeleteModal/PreventDeleteModal';
const CoachesPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachesList, setCoachesList] = useState([]);

    const [addCoachIsOpen, setAddCoachIsOpen] = useState(false);
    const [editCoachIsOpen, setEditCoachIsOpen] = useState(false);
    const [selectedCoachId, setSelectedCoachId] = useState(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

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


    return (
        <>
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
                                    <button className={mainStyles.tableBtn}  onClick={() => onDeleteCoachHandler(c.id
                                    )}>
                                        <img src={deleteIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CoachesPage;
