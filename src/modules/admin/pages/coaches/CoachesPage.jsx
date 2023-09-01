import styles from './CoachesPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import CoachModal from './modals/CoachModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import UpdateCoachModal from './modals/UpdateCoachModal';
import { getCoachesHelper } from '../../../../context/admin-data-context/admin-context.helper';
const CoachesPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachesList, setCoachesList] = useState([]);

    const [addCoachIsOpen, setAddCoachIsOpen] = useState(false);
    const [editCoachIsOpen, setEditCoachIsOpen] = useState(false);
    const [selectedCoachId, setSelectedCoachId] = useState(null);

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

    return (
        <>
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
                        <div className={mainStyles.bodyBlock}>
                            <div className={mainStyles.blockItem}>
                                <p>{c.firstName}</p>
                            </div>
                            <div className={mainStyles.blockItem}>
                                <div className={mainStyles.tableActions}>
                                    <button className={mainStyles.tableBtn} onClick={() => onEditCoachHandler(c.id)}>
                                        <img src={editIcon} alt='' />
                                    </button>
                                    <button className={mainStyles.tableBtn}>
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
