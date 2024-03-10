import styles from '../CoachingPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import closeIcon from '../../../../../img/components/regularClose.png';
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

    function cleanUp() {
        setCurrentImages([]);

        onClose();
    }

    useEffect(() => {
        if(currentAdminState.coaching && currentAdminState.coaching.length > 0) {
            const data = currentAdminState.coaching.find(x=> x.id === coachingId);
            if (data?.examplePhotos) {
                setCurrentImages(data.examplePhotos);
            }
        }
    }, [coachingId]);

    function onSaveHandler(currentImages: []) {

        const arr: any = [];

        currentImages.forEach((image, index) => {
            const form = new FormData();
            form.append('Id', coachingId);
            form.append('PhotoFile', image.data);
            form.append('OrderId', 1);
            form.append('FileName', image.name);

            arr.push(form);
        });

        addPhotosToCoachingHelper(dispatch, arr);

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
                                maxCount={4}
                            />
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
