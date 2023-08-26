import React from 'react';

import '../TrainerSection.css';

const TrainerLera = ({ name, photos, info, instagramLink, instagramSvg }) => (
    <div className='block-main__Lera'>
        <div className='block-main__items_Lera'>
            <div className='info-item_Lera'>
                <div className='info-item__title vetrino'>{name}</div>
                <div className='info-item__text'>
                    <ul className='info-item__text_item'>
                        {info.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='info-item__inst'>
                    <a href={instagramLink}>
                        <img src={instagramSvg} alt='Instagram'></img>
                    </a>
                </div>
            </div>
            <div className='item__img4'>
                <img src={photos[0]} alt='Фото'></img>
            </div>
            <div className='item__img5'>
                <img src={photos[2]} alt='Фото'></img>
            </div>
            <div className='item__img6'>
                <img src={photos[1]} alt='Фото'></img>
            </div>
        </div>
    </div>
);

export default TrainerLera;
