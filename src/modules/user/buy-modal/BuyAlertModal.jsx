import React, { useEffect, useRef, useState } from 'react';
import CustomInput from '../../../components/Input/CustomInput';
import CustomPasswordInput from '../../../components/Input/CustomPasswordInput';
import ModalWindow from '../../../components/Modal/ModalWindow';
import styles from './modal.module.css';
import Button from '../../../components/Button/Button';
import AuthService from '../../../services/auth-service';
import { getPayForm } from '../../../api/content-api';
import { getCoachingHelper, getFoodHelper } from '../../../context/content-context/content-context.helper';
import { useDispatch, useSelector } from 'react-redux';
import { PurchaseProductTypeCoaching } from '../../../constants/roles';

const BuyAlertModal = ({ isOpen, onClose, text, purchaseProductType, productId }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);
    const userService = new AuthService();
    const currentContentState = useSelector(state => state.content);
    useEffect(() => {
        getCoachingHelper(dispatch);
        getFoodHelper(dispatch);
    }, []);

    const divRef = useRef(null);
    function payForProduct() {
        getPayForm(productId, purchaseProductType)
            .then(r => {
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
                        <h4 className={styles.contentText}>
                            {purchaseProductType === PurchaseProductTypeCoaching
                                ? currentContentState.coaching.find(x=>x.id === productId)?.title
                                : currentContentState.food.find(x=>x.id === productId)?.title
                            }
                        </h4>
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
            styles={{
                bgColor:'var(--main-bg)',
                width: '60vw',
                height: '40vh',
                border: '2px solid var(--beige, #FFEDE4);',
                overlayBgColor: 'none'
        }}
        />
    </>
}

export default BuyAlertModal;
