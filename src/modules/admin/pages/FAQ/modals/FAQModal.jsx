import styles from '../FAQPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewFAQHelper,
    updateFAQHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';

const FAQModal = ({ isOpen, onClose, selectedId, editMode }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    function cleanUp() {
        setAnswer("");
        setQuestion("");

        onClose();
    }

    useEffect(() => {
        if (editMode && selectedId) {
            const data = currentAdminState.faq.find(x=> x.id === selectedId);
            setQuestion(data.question);
            setAnswer(data.answer);
        }
    }, [selectedId, editMode]);

    function changeQuestionHandler(e) {
        setQuestion(e?.target?.value);
    }

    function changeAnswerHandler(e) {
        setAnswer(e?.target?.value);
    }

    function onSaveHandler() {
        if(answer && question) {

            const data = { question: question, answer: answer };

            if(editMode && selectedId) {
                data.id = selectedId;
                updateFAQHelper(dispatch, selectedId, data);
            } else {
                addNewFAQHelper(dispatch, data);
            }

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
                            <h2 className={styles.contentTitle}>FAQ</h2>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Запитання"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeQuestionHandler}
                                        value={question}
                                        formRef={formRef}
                                        name={"FAQQuestion"}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Відповідь"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeAnswerHandler}
                                        value={answer}
                                        formRef={formRef}
                                        name={"FAQAnswer"}
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

export default FAQModal;
