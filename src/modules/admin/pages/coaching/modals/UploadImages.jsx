import styles from '../CoachingPage.module.css';
import mainStyles from '../../../Admin.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import CustomTextArea from '../../../../../components/Input/CustomTextArea';
import CustomSelectChiplets from '../../../../../components/CustomSelectChiplets/CustomSelectChiplets';
import PhotoUploader from '../../../../../components/PhotoUploader/PhotoUploader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachingHelper,
    addPhotosToCoachingHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import ImagesCarousel from '../../../../../components/ContentCarousel/ImagesCarousel';

const UploadImagesCarousel = ({ isOpen, onClose, coachingId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [currentImages, setCurrentImages] = useState([]);

    useEffect(() => {
        if(currentAdminState.coaching && currentAdminState.coaching.length > 0) {
            setCurrentImages(setCurrentImages);
        }
    }, [currentAdminState.coaching]);

    function onSaveHandler(currentImages: []) {

        currentImages.forEach((image, index) => {
            const form = new FormData();
            debugger;
            form.append('Id', coachingId);
            form.append('PhotoFile', image.data);
            form.append('OrderId', 1);

            addPhotosToCoachingHelper(dispatch, form);
        });
    }

    return (
        <>
            <ModalWindow
                element={
                    <>
                        <section className={styles.modalBox} >
                            <ImagesCarousel imageList={currentImages}  onOk={onSaveHandler} setList={setCurrentImages} />
                        </section>
                    </>
                }
                isOpen={isOpen}
                onClose={onClose}
                styles={{
                    bgColor:' #FFF',
                    width: '40vw',
                    height: '75vh',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default UploadImagesCarousel;
