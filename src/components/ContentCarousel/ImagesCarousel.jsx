import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgP from '../../img/photo/trainings/photo1.jpg';
import styles from './ImagesCarousel.module.css';
import React, { useEffect, useRef, useState } from 'react';
import defaultImg from '../../img/components/admin-img-def.svg';
import PhotoUploader from '../PhotoUploader/PhotoUploader';
import selectIcon from '../../img/components/vector.png';
import Select from '../Select/Select';
import { MOCKED_TRAININGS_DATA } from '../../modules/user/pages/ProfilePage/constants';
import CustomSelectChiplets from '../CustomSelectChiplets/CustomSelectChiplets';
import { number } from 'prop-types';
import deleteIcon from '../../img/components/delete_icon.png';

const customStyles = {
    control: base => ({
        ...base,
        border: 0,
        // This line disable the blue border
        boxShadow: 'none'
    }),
    option: () => ({
        textAlign: 'center',
        display: 'flex',
        width: 'auto',
        padding: '5px 10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '0.5px solid rgb(165, 165, 165)',
        background: 'white',
        color: '#000',
        fontSize: '14px',
        cursor: 'pointer'
    }),
};

const ImagesCarousel = ( props: { imageList:[] } ) => {
    const [currentImages, setCurrentImages] = useState([]);
    const fileInputRef = useRef(null);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(currentImages[0]);

    // useEffect(() => {
    //     setCurrentImages(props.imageList);
    // }, [props.imageList]);


    function onChange(e) {
        setSelectedIndex(e);
        setSelectedImage(currentImages[e]);
    }

    function onClickItem(e) {
        setSelectedIndex(e);
        setSelectedImage(currentImages[e]);
    }

    function onClickThumb(e) {
        debugger
        setSelectedIndex(e);
        setSelectedImage(currentImages[e]);
    }

    function handleSelectChange(e) {
        debugger;
        const data = currentImages.findIndex(x => x.index === e.value);
        const selected = currentImages.findIndex(x => x.index === selectedImage.index);

        const newList = currentImages;

        if (data > -1) {
            newList[data].index = selectedIndex.index;
        }
        newList[selected].index = e.value;

        setSelectedImage(newList[selected]);
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const blob = new Blob([event.target.result], { type: selectedImage.type });

                const newList = currentImages.length > 0
                    ? [...currentImages] : [];
                newList.push({data: blob, index: currentImages.length +1});

                setCurrentImages(newList);
            };

            reader.readAsArrayBuffer(selectedImage);
        }
    };

    function deleteImageHandler() {
        setCurrentImages(currentImages.filter(x => x.index !== selectedImage.index));
    }

    return <div className={styles.box}>
        <div className={styles.imgBox}>
            <div className={styles.imgInput} onClick={handleButtonClick}>
                <p className={styles.placeholder}>Upload new photo</p>
                <img src={selectIcon} alt='' />
            </div>
            <CustomSelectChiplets
                isDisabled={currentImages.length === 0}
                customInputContainer={styles.customInputContainer}
                className={styles.customSelect}
                placeholder={"Порядок фотографій на сторінці 'Деталі'"}
                required={true}
                //icon={instagramIcon}
                options={[
                    { value: 1, label: 1,},
                    { value: 2, label: 2,},
                    { value: 3, label: 3,},
                    { value: 4, label: 4,}
                ]}
                selectedOptionValue={selectedImage?.index}
                isMulti={false}
                onChange={handleSelectChange}
                selectStyles={customStyles}
            />
            <div className={styles.imgInput} onClick={deleteImageHandler}>
                <p className={styles.placeholder}>Видалити фото</p>
                <img src={deleteIcon} alt='' />
            </div>
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
                        <img src={URL.createObjectURL(x.data)}  alt="Uploaded" />
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
