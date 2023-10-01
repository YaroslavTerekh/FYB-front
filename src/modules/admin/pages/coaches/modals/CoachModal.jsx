import styles from '../CoachesPage.module.css';
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
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCoachHelper } from '../../../../../context/admin-data-context/admin-context.helper';
import { InputValidation } from '../../../../../components/helpers/input-validator';

const CoachModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [birthDate, setBirthDate] = useState(null);
    const [avatar, setAvatar] = useState(null);

    function cleanUp() {
        setName("");
        setLastName("");
        setDescription("");
        setInstagramLink("");
        setBirthDate(null);
        setAvatar(null);

        onClose();
    }

    function changeNameHandler(e) {
        setName(e?.target?.value);
    }

    function changeLastNameHandler(e) {
        setLastName(e?.target?.value);
    }

    function changeDescriptionHandler(e) {
        setDescription(e?.target?.value);
    }

    function changeInstagramLinkHandler(e) {
        setInstagramLink(e?.target?.value);
    }

    function changeBirthDateHandler(e) {
        setBirthDate(e);
    }

    function changeAvatarHandler(file) {
        setAvatar(file);
    }

    function onSaveHandler() {
        if(name && lastName  && instagramLink && birthDate) {
            const form = new FormData();

            // Append form data fields
            form.append('FirstName', name);
            form.append('LastName', lastName);
            // form.append('Description', description);
            form.append('InstagramLink', instagramLink);
            form.append('BirthDate', birthDate.toDateString());
            // form.append('Photos', avatar);

            addNewCoachHelper(dispatch, form);
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
                    <form ref={formRef} onBlur={onBlurHandler} className={styles.modalBox} >
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>Тренер</h2>
                            {/*<div className={styles.imgBox}>*/}
                            {/*    <PhotoUploader onChange={changeAvatarHandler}/>*/}
                            {/*</div>*/}
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                         customInputContainer={styles.customInputContainer}
                                         className={styles.customInput}
                                         placeholder={"Ім'я"} type={"text"}
                                         required={true}
                                         onChange={changeNameHandler}
                                         value={name}
                                         formRef={formRef}
                                         name={"CoachModalName"}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Прізвище"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeLastNameHandler}
                                        value={lastName}
                                        formRef={formRef}
                                        name={"CoachModalLastName"}
                                    />
                                </div>
                                {/*<div className={styles.inputBox}>*/}
                                {/*    <CustomTextArea*/}
                                {/*        customInputContainer={styles.customTextAreaContainer}*/}
                                {/*        className={styles.customTextArea}*/}
                                {/*        placeholder={"Опис"}*/}
                                {/*        required={true}*/}
                                {/*        onChange={changeDescriptionHandler}*/}
                                {/*        value={description}*/}
                                {/*        formRef={formRef}*/}
                                {/*        name={"CoachModalDescription"}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Instagram"}
                                        type={"text"}
                                        required={true}
                                        icon={instagramIcon}
                                        onChange={changeInstagramLinkHandler}
                                        value={instagramLink}
                                        formRef={formRef}
                                        name={"CoachModalInstagram"}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomDatePicker
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Дата народження"}
                                        required={true}
                                        icon={calendarIcon}
                                        onChange={changeBirthDateHandler}
                                        value={birthDate}
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

                    </form>
                }
                isOpen={isOpen}
                onClose={cleanUp}
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

export default CoachModal;
