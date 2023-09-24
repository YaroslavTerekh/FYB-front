import React, { useRef, useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import CustomPasswordInput from '../../../components/Input/CustomPasswordInput';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from './modal.module.css';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';
import { getPayForm } from '../../../api/content-api';

const BuyAlertModal = ({ isOpen, onClose, text, purchaseProductType, productId }) => {

    const divRef = useRef(null);
    function payForProduct() {
        getPayForm(productId, purchaseProductType)
            .then(r => {
                debugger;
                divRef.current.innerHTML = r.data;
                const inputElement = divRef.current.querySelector(`input[name="btn_text"]`);
                inputElement.click();
            })
            .catch(err => {});
    }

    return <>
        <ModalWindow
            element={
                <section className={styles.authBox} >
                    <div className='data' ref={divRef} style={{display:'none'}}>
                    </div>

                    <div className={`${styles.content} vetrino`} >
                        <h2 className={styles.contentTitle}>{text}</h2>
                    </div>
                    <Button
                        className={styles.btn}
                        aria-expanded={true}
                        aria-controls={`example-panel-`}
                        onClick={payForProduct}
                    >
                        <p>Оплатити</p>
                    </Button>
                </section>
            }
            isOpen={isOpen}
            onClose={onClose}
            styles={{ bgColor:'var(--main-bg)', width: '609px', height: '480px', border: '2px solid var(--beige, #FFEDE4);', overlayBgColor: 'none'}}
        />
    </>
}

export default BuyAlertModal;
