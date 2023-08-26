import { MOCKED_TRAININGS_LIST } from '../../user/sections/HomePage/TrainingSection/constants';
import TrainingCard from '../../user/sections/HomePage/TrainingSection/components/TrainingCard/TrainingCard';
import React from 'react';
import Modal from 'react-modal';

const LoginModal = () => {

    return <>
        <Modal
            isOpen={true}
            style={{width:"609px", height:"480px"}}
        >
            <section id='training' className='training' >
                <div className='container'>
                    <div className='training__title tlt vetrino'>
                        <h2>Тренування</h2>
                    </div>
                </div>
            </section>
        </Modal>

    </>
}

export default LoginModal;
