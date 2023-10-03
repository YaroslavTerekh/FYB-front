import styles from '../CoachesPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import closeIcon from '../../../../../img/components/regularClose.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewCoachingHelper, addPhotosToCoachHelper,
    addPhotosToCoachingHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import ImagesCarousel from '../../../../../components/ContentCarousel/ImagesCarousel';

const UploadImagesCarousel = ({ isOpen, onClose, coachingId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [currentImages, setCurrentImages] = useState([]);

    function cleanUp() {
        setCurrentImages([]);

        onClose();
    }

    useEffect(() => {
        if(currentAdminState.coaches && currentAdminState.coaches.length > 0) {
            const data = currentAdminState.coaches.find(x=> x.id === coachingId);
            if (data?.photos) {
                setCurrentImages(data.photos);
            }
        }
    }, [coachingId]);

    function onSaveHandler(currentImages: []) {

        currentImages.forEach((image, index) => {
            const form = new FormData();
            form.append('Id', coachingId);
            form.append('Files', image.data);
            form.append('FileName', image.name);
            // form.append('OrderId', index);

            addPhotosToCoachHelper(dispatch, form);
        });
        cleanUp();
    }

    return (
        <>
            <ModalWindow
                element={
                    <>
                        <section className={styles.modalBox} >
                            <ImagesCarousel
                                imageList={currentImages}
                                onOk={onSaveHandler}
                                setList={setCurrentImages}
                                maxCount={3} />
                        </section>
                    </>
                }
                isOpen={isOpen}
                onClose={cleanUp}
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
