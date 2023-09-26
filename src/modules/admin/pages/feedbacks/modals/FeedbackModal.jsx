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
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachHelper,
    addNewFeedbacksHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';

const FeedbackModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [feedback, setFeedback] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [coaching, setCoaching] = useState([]);
    const [firstPhoto, setFirstPhoto] = useState(null);
    const [secondPhoto, setSecondPhoto] = useState(null);
    const [coachingId, setCoachingId] = useState();

    useEffect(() => {
        if (currentAdminState.coaching) {
            setCoaching(currentAdminState.coaching.map(x=> { return  { value: x.id,  label: x.title}}));
        }
    }, [currentAdminState.coaching]);

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
        setCoachingId(e.value);
    }

    function changeInstagramLinkHandler(e) {
        setInstagramLink(e?.target?.value);
    }

    function onSaveHandler() {
        if(feedback && instagramLink && coaching && firstPhoto && secondPhoto) {
            const form = new FormData();

            form.append('FeedbackText', feedback);
            form.append('InstagramLink', instagramLink);
            form.append('CoachingId', coachingId);
            form.append('Photos', firstPhoto);
            form.append('Photos', secondPhoto);

            addNewFeedbacksHelper(dispatch, form);

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
                                        formRef={formRef}
                                        name={"FeedbackFeedback"}
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
                                        formRef={formRef}
                                        name={"FeedbackInstagram"}
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

                    </form>
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
