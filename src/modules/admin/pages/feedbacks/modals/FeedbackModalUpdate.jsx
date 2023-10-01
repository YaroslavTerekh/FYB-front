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
    addNewFeedbacksHelper, updateFeedbacksHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import deleteIcon from '../../../../../img/components/delete_icon.png';

const FeedbackModalUpdate = ({ isOpen, onClose, selectedId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [feedback, setFeedback] = useState("");
    const [instagramLink, setInstagramLink] = useState("");

    function cleanUp() {
        setFeedback("");
        setInstagramLink("");

        onClose();
    }

    useEffect(() => {
        if (selectedId) {
            const item = currentAdminState.feedbacks.find(x=> x.id === selectedId);
            setFeedback(item.feedbackText);
            setInstagramLink(item.instagramLink);
        }
    }, [selectedId]);

    function changeFeedbackHandler(e) {
        setFeedback(e?.target?.value);
    }

    function changeInstagramLinkHandler(e) {
        setInstagramLink(e?.target?.value);
    }

    function onSaveHandler() {
        if(selectedId && feedback && instagramLink) {
            const model = { id: selectedId, feedbackText: feedback, instagramLink: instagramLink };

            updateFeedbacksHelper(dispatch, selectedId, model);
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
                    <section onBlur={onBlurHandler} ref={formRef} className={styles.modalBox} >
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>Відгук</h2>
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
                                        name={"FeedbackUpdate"}
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
                                        name={"FeedbackUpdateInstagram"}
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
                onClose={cleanUp}
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

export default FeedbackModalUpdate;
