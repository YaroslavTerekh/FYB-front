import React, { useEffect } from 'react';
import Modal from 'react-modal';
import closeIcon from '../../img/components/icon8.png';
import styles from './ModalWindow.module.css'
import { element } from 'prop-types';

type ModalType = {
    element: any,
    isOpen: boolean,
    onClose: () => void
}

const ModalWindow = (prop: ModalType) => {

    function onCloseHandler() {
        debugger;
        prop.onClose();
    }

    return <>
        <Modal
            appElement={document.getElementById('root')}
            isOpen={prop.isOpen}
            style={{
                overlay: {
                    backgroundColor: 'none',
                    zIndex: 100
                },
                content: {
                    color: 'lightsteelblue',
                    width: '609px',
                    height: '480px',
                    margin: 'auto',
                    border: '1px solid white',
                    backgroundColor: 'var(--main-bg)',
                    padding: 0,
                    boxSizing: 'border-box'
                }
            }}
        >
            <div className={styles.box}>
                <button className={styles.closeBox} onClick={onCloseHandler}>
                    <img src={closeIcon} alt='close' />
                </button>
                {prop.element}
            </div>
        </Modal>

    </>
}

export default ModalWindow;
