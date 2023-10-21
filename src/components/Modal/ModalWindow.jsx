import React, { useEffect } from 'react';
import Modal from 'react-modal';
import closeIconDef from '../../img/components/icon8.png';
import styles from './ModalWindow.module.css'
import { element } from 'prop-types';

type ModalType = {
    element: any,
    isOpen: boolean,
    onClose: () => void,
    styles: ModalStyles,
    closeIcon: any,
    className: string
}

type ModalStyles = {
    bgColor: string,
    width: string,
    height: string,
    border: string,
    overlayBgColor: ''
}


const ModalWindow = (prop: ModalType) => {

    function onCloseHandler() {
        prop.onClose();
    }

    return <> { prop.isOpen &&
        <Modal
            appElement={document.getElementById('root')}
            isOpen={prop.isOpen}
            className={prop.className}
            style={{
                overlay: {
                    // backgroundColor: prop.styles.overlayBgColor,
                    zIndex: 100,
                },
                content: {
                    color: 'lightsteelblue',
                    width: prop.styles.width,
                    height: prop.styles.height,
                    margin: 'auto',
                    border: prop.styles.border,
                    backgroundColor: prop.styles.bgColor,
                    padding: 0,
                    boxSizing: 'border-box'
                }
            }
        }
        >
            <div className={styles.box}>
                <button className={styles.closeBox} onClick={onCloseHandler}>
                    <img src={prop.closeIcon ? prop.closeIcon : closeIconDef} alt='close' />
                </button>
                {prop.element}
            </div>
        </Modal>
        }
    </>
}

export default ModalWindow;
