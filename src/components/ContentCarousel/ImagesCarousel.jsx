import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgP from '../../img/photo/trainings/photo1.jpg';
import styles from './ImagesCarousel.module.css';
const ImagesCarousel = () => {


    function onChange() {

    }

    function onClickItem() {

    }

    function onClickThumb() {

    }

    return <>
        
        <Carousel className={styles.main} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src={imgP} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={imgP} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={imgP} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </>
}

export default ImagesCarousel
