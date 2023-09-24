import styles from '../CoachingPage.module.css';
import mainStyles from '../../../Admin.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import CustomTextArea from '../../../../../components/Input/CustomTextArea';
import CustomSelectChiplets from '../../../../../components/CustomSelectChiplets/CustomSelectChiplets';
import PhotoUploader from '../../../../../components/PhotoUploader/PhotoUploader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCoachingHelper } from '../../../../../context/admin-data-context/admin-context.helper';
import VideoUploader from '../../../../../components/VideoUploader/VideoUploader';

const CoachingModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachesList, setCoachesList] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [coach, setCoach] = useState("");
    const [price, setPrice] = useState(null);
    const [days, setDays] = useState(null);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        setCoachesList(currentAdminState.coaches);
    }, [currentAdminState.coaches]);

    function changeCoachHandler(e) {
        setCoach(e);
    }

    function changeNameHandler(e) {
        setName(e?.target?.value);
    }

    function changeDescriptionHandler(e) {
        setDescription(e?.target?.value);
    }

    function changePriceHandler(e) {
        setPrice(e?.target?.value);
    }

    function changeDaysHandler(e) {
        setDays(e?.target?.value);
    }

    function changeAvatarHandler(file) {
        setAvatar(file);
    }

    function onSaveHandler() {
        if(name && coach && coach.value && description && price && days && avatar) {
            const form = new FormData();

            form.append('Title', name);
            form.append('Description', description);
            form.append('Price', price);
            form.append('CoachId', coach.value);
            form.append('AccessDays', days);
            form.append('CoachingPhoto', avatar);

            addNewCoachingHelper(dispatch, form);

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
                            <h2 className={styles.contentTitle}>Тренування</h2>
                            <div className={styles.imgBox}>
                                <PhotoUploader onChange={changeAvatarHandler}/>
                            </div>
                            <div className={styles.imgBox}>
                                <VideoUploader onChange={changeAvatarHandler}/>
                            </div>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Назва"} type={"text"}
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
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Дні доступу"}
                                        type={"number"}
                                        required={true}
                                        onChange={changeDaysHandler}
                                        value={days}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomSelectChiplets
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customSelect}
                                        placeholder={"Тренер"}
                                        required={true}
                                        //icon={instagramIcon}
                                        onChange={changeCoachHandler}
                                        // value={instagramLink}
                                        options={coachesList?.map(c=> { return {value: c.id, label: c.firstName }})}
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

export default CoachingModal;
