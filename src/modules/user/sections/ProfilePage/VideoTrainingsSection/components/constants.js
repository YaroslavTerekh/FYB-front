import menuPhoto1 from '../../../../../../img/photo/Menu/photo1.jpg';
import menuPhoto2 from '../../../../../../img/photo/Menu/photo2.jpg';
import menuPhoto3 from '../../../../../../img/photo/Menu/photo3.jpg';
import menuPhoto4 from '../../../../../../img/photo/Menu/photo4.jpg';
import menuPhoto5 from '../../../../../../img/photo/Menu/photo5.jpg';

export const MOCKED_HEALTHY_MENU_DATA = [
    {
        day: 'Day 1',
        meals: [
            {
                title: 'Сніданок:',
                weight: ['30', '50'],
                dishes: [
                    'Омлет з 2-х яєць з сиром, помідором та зеленню',
                    'Хліб',
                ],
            },
            {
                title: 'Обід',
                weight: ['200', '100', '200'],
                dishes: [
                    'Картопля запечена або відварена (в готовому  вигляді)',
                    'Оселедець ',
                    'Салат з буряка (сіль, перець, часник) майонез 15гр)',
                ],
            },
            {
                title: 'Вечеря',
                dishes: [
                    'Жульєн (половину зготовленої страви)',
                    'Листовий салат з фетою - 20 гр (сіль,перець, гірчиця в зернах, соєвий соус)',
                ],
            },
        ],

        preparation: {
            title: 'Жульєн',
            instruction:
                'Візьміть 5гр масла та на сковороді злегка підсмажте цибулюдодайте 200гр курячого філе, порізаного смужками та 300гр шампіньйонівготувати 7-10хвдодати сіль, перець, сметану або вершки 50гр, в кінці затерти сиром 50гр',
        },
    },
];
