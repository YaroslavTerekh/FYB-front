import styles from '../FoodPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import closeIcon from '../../../../../img/components/regularClose.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addPhotosToFoodHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import ImagesCarousel from '../../../../../components/ContentCarousel/ImagesCarousel';

const UploadFoodImages = ({ isOpen, onClose, foodId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [currentImages, setCurrentImages] = useState([]);

    function cleanUp() {
        setCurrentImages([]);

        onClose();
    }

    useEffect(() => {
        if(currentAdminState.food && currentAdminState.food.length > 0) {
            const data = currentAdminState.food.find(x=> x.id === foodId);

            if (data?.photos) {
                setCurrentImages(data.photos);
            }
        }
    }, [foodId]);

    function onSaveHandler(currentImages: []) {

        currentImages.forEach((image, index) => {
            const form = new FormData();
            form.append('FoodId', foodId);
            form.append('File', image.data);
            form.append('OrderId', index);
            form.append('FileName', image.name);

            addPhotosToFoodHelper(dispatch, form);
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
                                maxCount={6}
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

export default UploadFoodImages;
