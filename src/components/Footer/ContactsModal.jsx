import React from 'react';
import styles from './Footer.css';
import Button from '../Button/Button';
import ModalWindow from '../Modal/ModalWindow';

const ContactsModal = ({ isOpen, onClose }) => {

    return <>
        <ModalWindow
            element={
                <section className={'finishModalBox'} >
                    <div className={`content vetrino`} >
                        <h2 className={'contentTitle'}>Контакти</h2>

                        <p className={'modal-info'}>
                            Апончук Валерія Юріївна
                        </p>
                        <p className={'modal-info'}>
                            Ідентифікаційний код: 3740208788
                        </p>
                        <p className={'modal-info'}>
                            Email: <a href="mailto:aponchukvaleri@gmail.com">aponchukvaleri@gmail.com</a>
                        </p>
                        <p className={'modal-info'}>
                            Телефон: <a href='tel:+30954677524'>+30954677524</a>
                        </p>
                        <p className={'modal-info'}>
                            Адреса:
                            Україна, Волинська область,
                            Ковельський район,
                            С.Довгоноси,
                            Вул.Івана Франка, буд.9
                        </p>
                    </div>
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
            className={'modalData'}
        />
    </>
}

export default ContactsModal;
