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
    addPhotosToCoachingHelper, addVideoToCoachingHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import ImagesCarousel from '../../../../../components/ContentCarousel/ImagesCarousel';
import VideosCarousel from '../../../../../components/VideosCarousel/VideosCarousel';

const UploadVideosCarousel = ({ isOpen, onClose, coachingId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [currentVideos, setCurrentVideos] = useState([]);

    useEffect(() => {
        // if(currentAdminState.coaching && currentAdminState.coaching.length > 0) {
        //     const data = currentAdminState.coaching.find(x=> x.id === coachingId);
        //     if (data.coachingPhoto) {
        //         setCurrentVideos(data.coachingPhoto);
        //     }
        // }
    }, [coachingId]);

    function onSaveHandler(currentVideos: []) {

        currentVideos.forEach((video, index) => {
            const form = new FormData();
            form.append('File', video.data);
            form.append('IsPreview', false);

            addVideoToCoachingHelper(dispatch, coachingId, form);
        });
    }

    return (
        <>
            <ModalWindow
                element={
                    <>
                        <section className={styles.modalBox} >
                            <VideosCarousel videoList={currentVideos}  onOk={onSaveHandler} setList={setCurrentVideos} />
                        </section>
                    </>
                }
                isOpen={isOpen}
                onClose={onClose}
                styles={{
                    bgColor:' #FFF',
                    width: '40vw',
                    height: '50vh',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default UploadVideosCarousel;
