import styles from './FAQPage.module.css';
import mainStyles from '../../Admin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    deleteCoachingHelper, deleteFAQHelper,
    getCoachingHelper, getFAQHelper, getFoodHelper, getUsersHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import PreventDeleteModal from '../../../../components/PreventDeleteModal/PreventDeleteModal';
import FoodPageModal from '../foods/modals/FoodPageModal';
import FAQModal from './modals/FAQModal';
import addIcon from '../../../../img/components/add_icon.png';

const FAQPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [faqList, setFaqList] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    const [editMode, setIsEditMode] = useState(false);
    const [addIsOpen, setAddIsOpen] = useState(false);

    useEffect(() => {
        getFAQHelper(dispatch);
    }, []);

    useEffect(() => {
        if (currentAdminState.faq) {
            debugger;
            setFaqList(currentAdminState.faq);
        }
    }, [currentAdminState.faq]);

    function onDeleteFaqHandler(id) {
        setSelectedId(id);
        setDeleteIsOpen(true);
    }

    function onEditFaqHandler(id: string) {
        setSelectedId(id);
        setIsEditMode(true);
        setAddIsOpen(true);
    }

    function deleteFaq() {
        setDeleteIsOpen(false);
        setSelectedId(null);
        deleteFAQHelper(dispatch, selectedId);
    }

    function addFoodCloseHandler() {
        setSelectedId(null);
        setIsEditMode(false);
        setAddIsOpen(false);
    }
    
    return (
        <>
            <FAQModal
                onClose={addFoodCloseHandler}
                isOpen={addIsOpen}
                editMode={editMode}
                selectedId={selectedId} />

            <PreventDeleteModal
                onClose={() => setDeleteIsOpen(false)}
                isOpen={deleteIsOpen} text={"Ви точно бажаєте видалити FAQ?"} onSummit={deleteFaq}/>
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>FAQ</h1>
                </div>
                <div className=''>
                    <button className={mainStyles.mainAddBtn} onClick={() => setAddIsOpen(true)}>
                        <p className={mainStyles.mainAddBtnText}>Додати FAQ</p>
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

                    {faqList && faqList.map(f =>
                        <div>
                            <div className={mainStyles.bodyBlock} key={f.id}>
                                <div className={mainStyles.blockItem}>
                                    <p>{f.question}</p>
                                </div>
                                <div className={mainStyles.blockItem}>
                                    <div className={mainStyles.tableActions}>
                                        <button className={mainStyles.tableBtn} onClick={() => onEditFaqHandler(f.id)}>
                                            <img src={editIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onDeleteFaqHandler(f.id)}>
                                            <img src={deleteIcon} alt='' />
                                        </button>
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

export default FAQPage;
