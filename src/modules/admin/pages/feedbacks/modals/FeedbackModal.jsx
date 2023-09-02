import styles from '../FeedbackPage.module.css';
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
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCoachHelper } from '../../../../../context/admin-data-context/admin-context.helper';

const FeedbackModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [feedback, setFeedback] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [coaching, setCoaching] = useState([]);
    const [firstPhoto, setFirstPhoto] = useState(null);
    const [secondPhoto, setSecondPhoto] = useState(null);

    function changeFirstPhotoHandler(file) {
        setFirstPhoto(file);
    }

    function changeSecondPhotoHandler(file) {
        setSecondPhoto(file);
    }

    function changeFeedbackHandler(e) {
        setFeedback(e?.target?.value);
    }

    function changeCoachingHandler(e) {
        setCoaching(e?.target?.value);
    }

    function changeInstagramLinkHandler(e) {
        setInstagramLink(e?.target?.value);
    }

    function onSaveHandler() {
        debugger;
        if(feedback && instagramLink && coaching && firstPhoto && secondPhoto) {
            const form = new FormData();

            // // Append form data fields
            // form.append('FirstName', name);
            // form.append('LastName', lastName);
            // form.append('Description', description);
            // form.append('InstagramLink', instagramLink);
            // form.append('BirthDate', birthDate.toDateString());
            // form.append('Avatar', avatar);

            addNewCoachHelper(dispatch, form);

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
                            <h2 className={styles.contentTitle}>Відгук</h2>
                            <div className={styles.imgContainer}>
                                <div className={styles.imgBox}>
                                    <PhotoUploader onChange={changeFirstPhotoHandler}/>
                                </div>
                                <div className={styles.imgBox}>
                                    <PhotoUploader onChange={changeSecondPhotoHandler}/>
                                </div>
                            </div>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomTextArea
                                        customInputContainer={styles.customTextAreaContainer}
                                        className={styles.customTextArea}
                                        placeholder={"Відгук"}
                                        required={true}
                                        onChange={changeFeedbackHandler}
                                        value={feedback}
                                    />
                                </div>
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
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomSelectChiplets
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customSelect}
                                        placeholder={"Список тренувань"}
                                        required={true}
                                        icon={instagramIcon}
                                        onChange={changeCoachingHandler}
                                        value={instagramLink}
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

export default FeedbackModal;
