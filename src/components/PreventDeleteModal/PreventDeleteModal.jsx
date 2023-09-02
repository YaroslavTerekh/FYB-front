import styles from './PreventDeleteModal.module.css';
import closeIcon from '../../img/components/regularClose.png';
import ModalWindow from '../Modal/ModalWindow';
import Button from '../Button/Button';

const PreventDeleteModal = ({ text, isOpen, onSummit, onClose }) => {

    return (
        <>
            <ModalWindow
                element={
                    <section className={styles.modalBox} >

                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>{text}</h2>
                            <div className=''>
                                <Button
                                    className={styles.btn}
                                    aria-expanded={true}
                                    aria-controls={`coach-modal`}
                                    onClick={onClose}
                                >
                                    <p>Скасувати</p>
                                </Button>
                            </div>
                            <div className=''>
                                <Button
                                    className={`${styles.btn} ${styles.btnDark}`}
                                    aria-expanded={true}
                                    aria-controls={`coach-modal`}
                                    onClick={onSummit}
                                >
                                    <p>Видалити</p>
                                </Button>
                            </div>
                        </div>
                    </section>
                }
                isOpen={isOpen}
                onClose={onClose}
                styles={{
                    bgColor:' #FFF',
                    width: '870px',
                    height: '315px',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default PreventDeleteModal;
