import styles from '../CoachesPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachDetailsHelper,
    addNewCoachHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import CustomSelectChiplets from '../../../../../components/CustomSelectChiplets/CustomSelectChiplets';
import addIcon from  '../../../../../img/components/add_icon.png';
import { iconList } from '../../../../../constants/icons-const';
const CoachDetails = ({ isOpen, onClose, coachId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [nameList, setNameList] = useState([{ id: 1, text: "" }]);
    const [icon, setIcon] = useState(null);

    function cleanUp() {
        setNameList([{ id: 1, text: "" }]);
        setIcon("");

        onClose();
    }

    function changeIconHandler(e) {
        setIcon(e);
    }

    function addItemHandler() {
        setNameList([...nameList, {id: ++nameList.length, text: ""}])
    }

    function changeNameHandler(e, id) {
        let newList = nameList;
        newList[id - 1].text = e?.target?.value;

        setNameList([...newList]);
    }

    function onSaveHandler() {
        if(coachId && nameList[0] && nameList[0].text?.length > 0) {

            const coachingDetails = nameList.map(d => { return  { coachId: coachId,  detail: d.text }})

            coachingDetails.forEach(x=> {
                addNewCoachDetailsHelper(dispatch, coachId, x);
            });

            cleanUp();
        } else {
            // TODO error
        }
    }

    const [formIsTouched, setFormIsTouched] = useState(false);
    const formRef = useRef(null);

    function onBlurHandler(e) {
        setFormIsTouched(true);
    }

    return (
        <>
            <ModalWindow
                element={
                    <form className={styles.modalBox} ref={formRef} onBlur={onBlurHandler}>
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>Основний опис тренера на головній сторінці</h2>
                            <div className='inputsBox'>
                                { nameList && nameList.map((n, i) =>
                                    <div className={styles.inputBox} key={n.id}>
                                        <CustomInput
                                            customInputContainer={styles.customInputContainer + " " + styles.imgInputWithBtn}
                                            className={styles.customInput}
                                            placeholder={"Деталі"} type={"text"}
                                            required={true}
                                            onChange={(e) => changeNameHandler(e, n.id)}
                                            value={n.text}
                                            formRef={formRef}
                                            name={`CoachDetails${i}`}
                                        />
                                        <div className={styles.addIcon} onClick={addItemHandler}>
                                            <img src={addIcon} alt='' />
                                        </div>
                                    </div>
                                ) }
                                <div className={styles.btnBox}>
                                    <Button
                                        className={styles.btn}
                                        aria-expanded={true}
                                        aria-controls={`coach-modal`}
                                        onClick={onSaveHandler}
                                    >
                                        <p>OK</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                }
                isOpen={isOpen}
                onClose={cleanUp}
                styles={{
                    bgColor:' #FFF',
                    width: '50vw',
                    height: '60vh',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default CoachDetails;
