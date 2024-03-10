import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './ImagesCarousel.module.css';
import React, { useEffect, useRef, useState } from 'react';
import defaultImg from '../../img/components/admin-img-def.svg';
import selectIcon from '../../img/components/vector.png';
import deleteIcon from '../../img/components/delete_icon.png';
import Button from '../Button/Button';
import { writeError } from '../../context/alert-context/alert-context-helper';
import { useDispatch } from 'react-redux';

const ImagesCarousel = ( props: { imageList:[], onOk: any, setList: any, maxCount: number } ) => {
    const dispatch = useDispatch();
    const [currentImages, setCurrentImages] = useState([]);
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(currentImages[0]);

    useEffect(() => {

        if(props.imageList && props.imageList.length && props.imageList.length > 0) {
            setCurrentImages(props.imageList);
            setSelectedImage(props.imageList[0]);
        }

    }, [props.imageList]);


    function onChange(e) {
        setSelectedImage(currentImages[e]);
    }

    function onClickItem(e) {
        setSelectedImage(currentImages[e]);
    }

    function onClickThumb(e) {
        setSelectedImage(currentImages[e]);
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const selectedImageData = e.target.files[0];

        if (selectedImageData) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const blob = new Blob([event.target.result], {
                    type: selectedImageData.type,
                    name: selectedImageData.name,
                });

                let newList = currentImages.length > 0
                    ? [...currentImages] : [];

                // приховування старих фото
                if (newList &&
                    newList.length > 0 &&
                    newList?.find(x=> x?.filePath)) {

                    newList = newList.filter(x=> !x.filePath);
                }

                newList.push({data: blob, name: selectedImageData.name, index: currentImages.length + 1});

                setCurrentImages(newList);
                props.setList(newList);

                if(currentImages.length === 0) {
                    setSelectedImage(newList[0])
                }
            };

            reader.readAsArrayBuffer(selectedImageData);
        }
    };

    function deleteImageHandler() {
        setCurrentImages(currentImages.filter(x => x.index !== selectedImage.index));
    }

    function onOk() {
        if(currentImages.length === props.maxCount) {
            props.onOk(currentImages.filter(x=> !x.filePath));
        } else {
            writeError(dispatch, "Кількість фото має бути - " + props.maxCount);
        }
    }

    return <div className={styles.box}>
        <div className={styles.imgBox}>
            <p>Максимальна кількість фото: {props.maxCount}</p>
            { currentImages &&
              currentImages.length > 0 &&
              currentImages?.find(x=> x?.filePath) &&
                <p>* Для зміни існуючих фотографій, потрібно буде заново додати усі фото, а попередні фото буде автоматично видалено</p> }
            <div className={styles.imgInput} onClick={handleButtonClick}>
                <p className={styles.placeholder}>Upload new photo</p>
                <img src={selectIcon} alt='' />
            </div>
            {
                !selectedImage?.filePath &&
                    <div className={styles.imgInput} onClick={deleteImageHandler}>
                    <p className={styles.placeholder}>Видалити фото</p>
                    <img src={deleteIcon} alt='' />
            </div> }
            <Button
                className={styles.btn}
                aria-expanded={true}
                aria-controls={`coach-modal`}
                onClick={onOk}
            >
                <p>OK</p>
            </Button>
        </div>

        { (currentImages && currentImages.length > 0)
            ?  <Carousel
                className={styles.main}
                showArrows={true}
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}>
                { currentImages.map((x, i) =>
                    <div key={i}>
                        { x?.filePath
                            ? <img src={x.filePath}  alt="Uploaded" />
                            : <img src={URL.createObjectURL(x.data)}  alt="Uploaded" />
                        }
                    </div>
                )}

            </Carousel>
            :
                <div className={styles.defaultImg}>
                    <img src={defaultImg} alt='' />
                </div>

        }
        <input type="file" accept="image/*"  ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />

    </div>
}

export default ImagesCarousel
