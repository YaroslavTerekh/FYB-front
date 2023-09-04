import styles from '../FoodPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import CustomTextArea from '../../../../../components/Input/CustomTextArea';
import instagramIcon from '../../../../../img/components/instagram.png';
import CustomDatePicker from '../../../../../components/Input/CustomDatePicker';
import calendarIcon from '../../../../../img/components/calendar.png';
import CustomSelect from '../../../../../components/Select/Select';
import CustomSelectChiplets from '../../../../../components/CustomSelectChiplets/CustomSelectChiplets';
import defaultImg from '../../../../../img/components/admin-img-def.svg';
import PhotoUploader from '../../../../../components/PhotoUploader/PhotoUploader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachHelper,
    addNewFeedbacksHelper, addNewFoodHelper, updateFoodHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';

const FoodPageModal = ({ isOpen, onClose, selectedId, editMode }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [coaching, setCoaching] = useState([]);
    const [coachingId, setCoachingId] = useState();

    useEffect(() => {
        if (editMode && selectedId) {
            const data = currentAdminState.food.find(x=> x.id === selectedId);
            setName(data.title);
            setDescription(data.description);
            setPrice(data.price);
        }
    }, [selectedId, editMode]);

    useEffect(() => {
        if (currentAdminState.coaching) {
            setCoaching(currentAdminState.coaching.map(x=> { return  { value: x.id,  label: x.title}}));
        }
    }, [currentAdminState.coaching]);

    function changeNameHandler(e) {
        setName(e?.target?.value);
    }

    function changeDescriptionHandler(e) {
        setDescription(e?.target?.value);
    }

    function changePriceHandler(e) {
        setPrice(e?.target?.value);
    }

    function changeCoachingHandler(e) {
        setCoachingId(e.value);
    }

    function onSaveHandler() {
        if(coachingId && name && description && price) {

            const data = { title: name, description: description,  price: price, coachingId: coachingId};

            if(editMode && selectedId) {
                data.id = selectedId;
                updateFoodHelper(dispatch, selectedId, data);
            } else {
                addNewFoodHelper(dispatch, data);
            }

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
                            <h2 className={styles.contentTitle}>Харчування</h2>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Назва"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeNameHandler}
                                        value={name}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomTextArea
                                        customInputContainer={styles.customTextAreaContainer}
                                        className={styles.customTextArea}
                                        placeholder={"Опис"}
                                        required={true}
                                        onChange={changeDescriptionHandler}
                                        value={description}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Ціна"}
                                        type={"number"}
                                        required={true}
                                        onChange={changePriceHandler}
                                        value={price}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomSelectChiplets
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customSelect}
                                        placeholder={"В подарунок до тренування"}
                                        required={true}
                                        onChange={changeCoachingHandler}
                                        options={coaching}
                                    />
                                </div>
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
                    width: '670px',
                    height: '570px',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default FoodPageModal;
