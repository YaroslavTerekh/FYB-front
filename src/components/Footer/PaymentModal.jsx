import React from 'react';
import styles from './Footer.css';
import Button from '../Button/Button';
import ModalWindow from '../Modal/ModalWindow';

const PaymentModal = ({ isOpen, onClose }) => {

    return <>
        <ModalWindow
            element={
                <section className={'finishModalBox'} >
                    <div className={`content vetrino`} >
                        <h2 className={'contentTitle'}>Оплата</h2>

                        <p className={'modal-info'}>
                            Оплата через сайт здійснюється картками VISA / MasterCard за допомогою платіжної системи Ligpay.
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

export default PaymentModal;
