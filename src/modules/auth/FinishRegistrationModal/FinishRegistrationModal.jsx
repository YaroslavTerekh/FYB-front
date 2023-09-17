import React from 'react';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from '../Auth.module.css';
import Button from '../../../components/Button/Button';

const FinishRegistrationModal = ({ isOpen, onClose }) => {

    return <>
        <ModalWindow
            element={
                <section className={styles.finishModalBox} >
                    <div className={`${styles.content} vetrino`} >
                        <h2 className={styles.contentTitle}>Дякуємо за реєстрацію</h2>
                        <p className={`${styles.text} ${styles.mB35}`}>Для доступу до вашого кабінету підтвердіть свій номер телефону</p>
                    </div>
                    <Button
                        className={styles.btn}
                        aria-expanded={true}
                        aria-controls={`example-panel-`}
                        onClick={onClose}
                    >
                        <p>Далі</p>
                    </Button>
                </section>
            }
            isOpen={isOpen}
            onClose={onClose}
            styles={{
                bgColor:'var(--main-bg)',
                width: '609px',
                height: '380px',
                border: '2px solid var(--beige, #FFEDE4);',
                overlayBgColor: 'none'
            }}
        />
    </>
}

export default FinishRegistrationModal;
