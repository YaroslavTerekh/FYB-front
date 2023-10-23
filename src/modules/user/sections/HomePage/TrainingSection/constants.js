import stretchingPhoto from '../../../../../img/photo/trainings/photo1.jpg';
import sexyPhoto from '../../../../../img/photo/trainings/photo2.jpg';
import kidsPhoto from '../../../../../img/photo/trainings/photo3.jpg';
import functionalPhoto from '../../../../../img/photo/trainings/photo4.jpg';
import healthyPhoto from '../../../../../img/photo/trainings/photo5.jpg';
import stretchingIcon from '../../../../../img/components/icon10.svg';
import sexyIcon from '../../../../../img/components/icon14.png';
import kidsIcon from '../../../../../img/components/icon9.png';
import functionalIcon from '../../../../../img/components/icon13.png';
import heartIcon from '../../../../../img/components/iconHeartBold.svg';
import starIcon from '../../../../../img/components/icon6.svg';
import checkIcon from '../../../../../img/components/icon15.svg';


export function GetTrainingIconHelper(id: number) {
    switch (id) {
        case 0:
            return functionalIcon;
        case 1:
            return kidsIcon;
        case 2:
            return stretchingIcon;
        case 3:
            return sexyIcon;
        default:
            return sexyIcon;
    }
}

export const MOCKED_TRAININGS_LIST = [
    {
        photo: stretchingPhoto,
        title: 'Stretching',
        subtitle:
            'Ефективні тренування для розвитку гнучкості без шкоди для здоров‘я',
        icon: stretchingIcon,
        numerosity: '8 тренувань',
        time: '2 місяці доступу',
        price: '600 грн',
        className: 'stretching',
    },
    {
        photo: sexyPhoto,
        title: 'SEXY сідниці',
        subtitle: 'Ефективні тренування від яких дійсно збільшуються сідниці!',
        icon: sexyIcon,
        numerosity: '8 тренувань',
        time: '2 місяці доступу',
        gift: '+ харчування в подарунок',
        price: '600 грн',
        className: 'sexy',
    },
    {
        photo: kidsPhoto,
        title: 'Stretching KIDS',
        subtitle:
            'Тренування, яке включає в себе велику кількість різних вправ, що сприяють розвитку фізичних здібностей дитини',
        icon: kidsIcon,
        numerosity: '8 тренувань',
        time: '2 місяці доступу',
        price: '600 грн',
        className: 'kids',
    },
    {
        photo: functionalPhoto,
        title: 'Functional training',
        subtitle:
            'Інтенсивне функціональне тренування, що подарує вам бажаний результат!',
        icon: functionalIcon,
        numerosity: '8 тренувань',
        time: '2 місяці доступу',
        price: '600 грн',
        className: 'functional',
    },
    {
        photo: healthyPhoto,
        title: 'Healthy раціон',
        subtitle:
            '«Збалансоване харчування дороге» - це справжній міф. Наш Раціон харчування побудований на основі простих та доступних кожному продуктів!',
        time: 'Раціон на 21 день',
        price: '400 грн',
        className: 'healthy',
    },
];
