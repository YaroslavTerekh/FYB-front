import styles from '../FoodPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachDetailsHelper,
    addNewCoachHelper, addNewCoachingDetailsHelper, addNewFoodDetailsHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import addIcon from  '../../../../../img/components/add_icon.png';
import CustomTextArea from '../../../../../components/Input/CustomTextArea';

const FoodDetails = ({ isOpen, onClose, foodId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [nameList, setNameList] = useState([{ id: 1, text: "" }]);
    const [icon, setIcon] = useState(null);
    const [title, setTitle] = useState(null);

    function cleanUp() {
        setNameList([{ id: 1, text: "" }]);
        setIcon("");
        setTitle([])

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

    function changeTitleChandler(e) {
        setTitle(e?.target?.value);
    }

    function onSaveHandler() {
        if(foodId && title && nameList[0] && nameList[0].text?.length > 0) {

            nameList.forEach(x => {

                const data = {
                    foodId: foodId,
                    title: title,
                    detail: x.text
                }

                addNewFoodDetailsHelper(dispatch, foodId,  data);
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
                            <h2 className={styles.contentTitle}>Деталі</h2>
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
                                        name={"FoodDetailsTitle"}
                                    />
                                </div>

                                { nameList && nameList.map((n, i) =>
                                    <div className={styles.inputBox} key={n.id}>
                                        <CustomTextArea
                                            customInputContainer={styles.customTextAreaContainer}
                                            className={styles.customInput}
                                            placeholder={"Деталі"} type={"text"}
                                            required={true}
                                            onChange={(e) => changeNameHandler(e, n.id)}
                                            value={n.text}
                                            formRef={formRef}
                                            name={`FoodDetails${i}`}
                                        />

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

export default FoodDetails;
