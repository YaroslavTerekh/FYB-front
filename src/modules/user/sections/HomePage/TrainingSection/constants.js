import stretchingIcon from '../../../../../img/components/icon10.svg';
import sexyIcon from '../../../../../img/components/icon14.png';
import kidsIcon from '../../../../../img/components/icon9.png';
import functionalIcon from '../../../../../img/components/icon13.png';


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
