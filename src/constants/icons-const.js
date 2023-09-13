import heartIcon from '../img/components/iconHeartBold.svg';
import starIcon from '../img/components/icon6.svg';
import checkIcon from '../img/components/icon15.svg';

export const iconList = [
    { value: 0, label:"Heart" },
    { value: 1, label:"Star" },
    { value: 2, label:"Mark" }
]

export function GetIconHelper(id: number) {
    switch (id) {
        case 0:
            return heartIcon;
        case 1:
            return starIcon;
        case 2:
            return checkIcon;
    }
}
