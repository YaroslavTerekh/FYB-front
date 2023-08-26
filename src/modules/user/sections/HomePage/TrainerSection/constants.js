import LydaPhoto1 from './images/photo1.jpg';
import LydaPhoto2 from './images/photo2.jpg';
import LydaPhoto3 from './images/photo3.jpg';
import LeraPhoto1 from './images/photo4.jpg';
import LeraPhoto2 from './images/photo5.jpg';
import LeraPhoto3 from './images/photo6.jpg';

import instagramIcon from '../../../../../img/instagram.svg';

export const MOCKED_TRAINERS_DATA = {
    lyda: {
        name: 'Люда',
        photos: [LydaPhoto1, LydaPhoto2, LydaPhoto3],
        info: [
            'Сертифікований тренер з фітнесу',
            'Понад 15 років в сфері фітнесу',
            'Нутриціолог, пройшла навчання у школі Здоров’я Толстікової',
            'Зробила щасливими понад 1000 дівчат, які досягли бажаних форм та позбулись лишніх кілограм',
            'Прививає любов до спорту та здорового тіла',
        ],
        instagramLink: 'https://www.instagram.com/lyudastrilyk/',
        instagramSvg: instagramIcon,
    },
    lera: {
        name: 'Валерія',
        photos: [LeraPhoto1, LeraPhoto2, LeraPhoto3],
        info: [
            'Сертифікований тренер зі Stretching напрямів',
            'Успішно посадила на шпагат дівчат та жінок різного віку, допомогла розвинути гнучкість їхнього тіла',
            'Сертифікований тренер з Functional training',
            'Понад 3 роки щоденних тренувань з дівчатами',
            'Обирає вправи, які є не тільки ефективними, але і дуже корисними для вашого організму',
        ],
        instagramLink: 'https://www.instagram.com/lerysik27/',
        instagramSvg: instagramIcon,
    },
};
