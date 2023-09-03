import styles from '../CoachingPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import PhotoUploader from '../../../../../components/PhotoUploader/PhotoUploader';
import React, { useEffect, useState } from 'react';
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

    function changeIconHandler(e) {
        setIcon(e);
    }

    function addItemHandler() {
        setNameList([...nameList, {id: ++nameList.length, text: ""}])
    }

    function changeNameHandler(e, id) {
        debugger;
        let newList = nameList;
        newList[id - 1].text = e?.target?.value;

        setNameList([...newList]);
    }

    function onSaveHandler() {
        if(coachingId && icon && nameList[0] && nameList[0].text?.length > 0) {

            const data = {
                id: coachingId,
                coachingDetails: nameList.map(d => { return  { icon: icon.value,  detail: d.text }})
            }

            addNewCoachingDetailsHelper(dispatch, data);

        } else {
            // TODO error
        }
    }

    return (
        <>
            <ModalWindow
                element={
                    <section className={styles.modalBox} >
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>Деталі тренування</h2>
                            <div className='inputsBox'>
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
                                { nameList && nameList.map(n =>
                                    <div className={styles.inputBox} key={n.id}>
                                        <CustomInput
                                            customInputContainer={styles.customInputContainer + " " + styles.imgInputWithBtn}
                                            className={styles.customInput}
                                            placeholder={"Деталі"} type={"text"}
                                            required={true}
                                            onChange={(e) => changeNameHandler(e, n.id)}
                                            value={n.text}
                                        />
                                        <div className={styles.addIcon} onClick={addItemHandler}>
                                            <img src={addIcon} alt='' />
                                        </div>
                                    </div>
                                ) }
                                <div className=''>
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

                    </section>
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
