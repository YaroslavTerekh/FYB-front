import styles from './FeedbackPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    deleteCoachingHelper, deleteFeedbackHelper,
    getCoachesHelper,
    getCoachingHelper,
    getFeedbacksHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import FeedbackModal from './modals/FeedbackModal';
import UpdateCoaching from '../coaching/modals/UpdateCoaching';
import FeedbackModalUpdate from './modals/FeedbackModalUpdate';
import PreventDeleteModal from '../../../../components/PreventDeleteModal/PreventDeleteModal';
const FeedbackPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [feedbacksList, setFeedbacksList] = useState([]);

    const [addFeedbackIsOpen, setFeedbackCoachIsOpen] = useState(false);
    const [editCoachIsOpen, setEditCoachIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        getFeedbacksHelper(dispatch);
        getCoachingHelper(dispatch);
    }, []);

    useEffect(() => {
        if(currentAdminState.feedbacks) {
            debugger;
            setFeedbacksList(currentAdminState.feedbacks);
        }

    }, [currentAdminState.feedbacks]);

    function onEditHandler(id: string) {
        setSelectedId(id);
        setEditCoachIsOpen(true);
    }

    function onEditCloseHandler() {
        setSelectedId(null);
        setEditCoachIsOpen(false);
    }

    function addFeedbackCloseHandler() {
        setFeedbackCoachIsOpen(false);
    }

    const [deleteIsOpen, setDeleteIsOpen] = useState(false);

    function deleteFeedback() {
        setDeleteIsOpen(false);
        deleteFeedbackHelper(dispatch, selectedId);
    }

    function onDeleteHandler(id: string) {
        setSelectedId(id);
        setDeleteIsOpen(true);
    }

    return (
        <>
            <PreventDeleteModal onClose={() => setDeleteIsOpen(false)} isOpen={deleteIsOpen} text={"Ви точно бажаєте видалити відгук?"} onSummit={deleteFeedback}/>
            <FeedbackModalUpdate  isOpen={editCoachIsOpen} selectedId={selectedId} onClose={onEditCloseHandler} />
            <FeedbackModal isOpen={addFeedbackIsOpen}  onClose={addFeedbackCloseHandler} />
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Відгуки</h1>
                </div>
                <div className=''>
                    <button className={mainStyles.mainAddBtn} onClick={() => setFeedbackCoachIsOpen(true)}>
                        <p className={mainStyles.mainAddBtnText}>Додати відгук</p>
                        <img src={addIcon} alt='' className={mainStyles.mainAddBtnIcon}/>
                    </button>
                </div>
                <div className={mainStyles.tableBox}>
                    <div className={mainStyles.headBlock}>
                        <div className={mainStyles.blockItem}>
                            <p>NAME\INSTAGRAM</p>
                        </div>
                        <div className={mainStyles.blockItem}>
                            <p>Actions</p>
                        </div>
                    </div>

                    {feedbacksList && feedbacksList.map(c =>
                        <div className={mainStyles.bodyBlock} key={c.id}>
                            <div className={mainStyles.blockItem}>
                                <p>{c.feedbackText}</p>
                            </div>
                            <div className={mainStyles.blockItem}>
                                <div className={mainStyles.tableActions}>
                                    <button className={mainStyles.tableBtn} onClick={() => onEditHandler(c.id)}>
                                        <img src={editIcon} alt='' />
                                    </button>
                                    <button className={mainStyles.tableBtn} onClick={() => onDeleteHandler(c.id)}>
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

export default FeedbackPage;
