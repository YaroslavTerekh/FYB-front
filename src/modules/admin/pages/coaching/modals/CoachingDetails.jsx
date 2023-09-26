import styles from '../CoachingPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import PhotoUploader from '../../../../../components/PhotoUploader/PhotoUploader';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachHelper,
    addNewCoachingDetailsHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import selectIcon from '../../../../../img/components/vector.png';
import CustomSelectChiplets from '../../../../../components/CustomSelectChiplets/CustomSelectChiplets';
import addIcon from  '../../../../../img/components/add_icon.png';
import { iconList } from '../../../../../constants/icons-const';
const CoachingDetails = ({ isOpen, onClose, coachingId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [nameList, setNameList] = useState([{ id: 1, text: "" }]);
    const [icon, setIcon] = useState(null);
    const [title, setTitle] = useState(null);
    function changeIconHandler(e) {
        setIcon(e);
    }

    function changeTitleChandler(e) {
        setTitle(e?.target?.value);
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
        if(coachingId && icon && nameList[0] && nameList[0].text?.length > 0) {

            const dataParent = {
                coachingId: coachingId,
                title: title
            }

            const data = {
                coachingDetails: nameList.map(d => { return  { icon: icon.value,  detail: d.text }})
            }

            addNewCoachingDetailsHelper(dispatch,dataParent, data);

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
                    <form onBlur={onBlurHandler} ref={formRef} className={styles.modalBox} >
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>Деталі тренування</h2>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Заголовок"} type={"text"}
                                        required={true}
                                        onChange={changeTitleChandler}
                                        value={title}
                                        formRef={formRef}
                                        name={"CoachingDetailsTitle"}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomSelectChiplets
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customSelect}
                                        placeholder={"Іконка"}
                                        required={true}
                                        //icon={instagramIcon}
                                        onChange={changeIconHandler}
                                        // value={instagramLink}
                                        options={iconList}
                                    />
                                </div>
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
                                            name={`CoachingDetails${i}`}
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
                onClose={onClose}
                styles={{
                    bgColor:' #FFF',
                    width: '870px',
                    height: '670px',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default CoachingDetails;
