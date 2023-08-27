import React from 'react';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from '../Auth.module.css';

const FinishRegistrationModal = ({ isOpen, onClose }) => {

    return <>
        <ModalWindow
            element={
                <section className={styles.authBox} >
                    <div className={`${styles.content} vetrino`} >
                        <h2 className={styles.contentTitle}>Дякуємо за реєстрацію</h2>
                    <p className={`${styles.text} ${styles.mB35}`}></p>
                    </div>
                </section>
            }
            isOpen={isOpen}
            onClose={onClose}
        />
    </>
}

export default FinishRegistrationModal;
