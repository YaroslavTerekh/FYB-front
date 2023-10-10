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
    addPhotosToCoachingHelper, addVideoToCoachingHelper, deleteCoachingVideoHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';
import ImagesCarousel from '../../../../../components/ContentCarousel/ImagesCarousel';
import VideosCarousel from '../../../../../components/VideosCarousel/VideosCarousel';

const UploadVideosCarousel = ({ isOpen, onClose, coachingId }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [currentVideos, setCurrentVideos] = useState([]);

    function cleanUp() {
        setCurrentVideos([]);

        onClose();
    }

    useEffect(() => {
        if(currentAdminState.coaching && currentAdminState.coaching.length > 0) {
            const data = currentAdminState.coaching.find(x=> x.id === coachingId);
            if (data?.videos) {
                setCurrentVideos(data.videos.filter(x=> !x?.isPreview));
            }
        }
    }, [coachingId]);

    function onSaveHandler(currentVideos: []) {

        currentVideos.forEach((video, index) => {
            const form = new FormData();
            form.append('File', video.data);
            form.append('IsPreview', false);
            form.append('FileName', video.name);

            addVideoToCoachingHelper(dispatch, coachingId, form);
        });

        cleanUp();
    }

    function onDeleteVideo(id: string) {
        deleteCoachingVideoHelper(dispatch, id);
    }

    return (
        <>
            <ModalWindow
                element={
                    <>
                        <section className={styles.modalBox} >
                            <VideosCarousel videoList={currentVideos} onOk={onSaveHandler} onDelete={onDeleteVideo} setList={setCurrentVideos} />
                        </section>
                    </>
                }
                isOpen={isOpen}
                onClose={cleanUp}
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
